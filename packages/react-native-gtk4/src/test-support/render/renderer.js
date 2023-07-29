import { Reconciler } from "../../reconciler.js"
import { Container } from "../../container.js"
import { createApplication } from "./application.js"
import {
  PRIVATE_CONTAINER_KEY,
  withApplicationContext,
} from "../../components/ApplicationProvider.js"
import "../../overrides.js"

jest.useFakeTimers()
jest.spyOn(Reconciler, "createContainer")

const textPredicate = (predicate, child) => {
  return (
    !predicate.text ||
    (child.constructor.name === "Label" &&
      child.props.label.trim() === predicate.text.trim())
  )
}

const typePredicate = (predicate, child) => {
  return !predicate.type || child.constructor.name === predicate.type
}

const propsPredicate = (predicate, child) => {
  return (
    !predicate.props ||
    Object.keys(predicate.props).every((key) => {
      return child.props[key] === predicate.props[key]
    })
  )
}

const predicateFn = (predicate, child) => {
  return (
    textPredicate(predicate, child) &&
    typePredicate(predicate, child) &&
    propsPredicate(predicate, child)
  )
}

export class Renderer {
  setup() {
    const application = createApplication()

    this.application = application
    this.container = new Container(application)
    this.instance = Reconciler.createContainer.mock.results[0].value

    this.applicationContext = {
      application,
      quit: jest.fn(),
      [PRIVATE_CONTAINER_KEY]: this.container,
    }
  }

  render(element) {
    jest.spyOn(console, "error").mockImplementation(() => {})

    Reconciler.updateContainer(
      withApplicationContext(element, this.applicationContext),
      this.instance,
      null,
      () => {}
    )

    Reconciler.flushSync(() => {})
    Reconciler.flushControlled(() => {})
    Reconciler.flushPassiveEffects()
    jest.runAllTimers()
    console.error.mockRestore()
  }

  findAllBy(predicate = {}, root = this.container) {
    const results = []

    for (const child of root.children) {
      if (predicateFn(predicate, child)) {
        results.push(child)
      }

      results.push(...this.findAllBy(predicate, child))
    }

    return results
  }

  findBy(predicate = {}, root = this.container) {
    return this.findAllBy(predicate, root)[0] ?? null
  }

  fireEvent(event, ...args) {
    const handler = this.root.handlers[event]

    if (!handler) {
      return
    }

    handler(...args)
    jest.runAllTimers()
  }
}
