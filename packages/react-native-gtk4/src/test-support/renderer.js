import { Reconciler } from "../reconciler.js"
import "../overrides.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import { createRootNode } from "../rootNode.js"
import Container from "../container.js"

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

export default class Renderer {
  setup() {
    jest.useFakeTimers()
    jest.spyOn(Reconciler, "createContainer")
    Gio.Application.getDefault = jest.fn(() => this.application)

    this.application = new Gtk.Application()
    this.applicationContainer = new Container(createRootNode(this.application))
    this.container = Reconciler.createContainer.mock.results[0].value
  }

  render(element) {
    jest.spyOn(console, "error").mockImplementation(() => {})
    this.applicationContainer.render(element)

    while (jest.getTimerCount() > 0) {
      jest.runAllTimers()
      this.applicationContainer.commit()
    }

    console.error.mockRestore()
  }

  findAllBy(predicate = {}, root = this.applicationContainer.rootNode) {
    const results = []

    for (const child of root.children) {
      if (predicateFn(predicate, child)) {
        results.push(child)
      }

      results.push(...this.findAllBy(predicate, child))
    }

    return results
  }

  findBy(predicate = {}, root = this.applicationContainer.rootNode) {
    return this.findAllBy(predicate, root)[0] ?? null
  }

  fireEvent(node, event, ...args) {
    const handler = node.handlers[event]

    if (!handler) {
      return
    }

    handler(...args)
    jest.runAllTimers()
  }
}
