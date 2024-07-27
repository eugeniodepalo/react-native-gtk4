import "@/overrides.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gio from "@/generated/girs/node-gio-2.0"
import { createRootNode } from "@/rootNode.js"
import Container from "@/container.js"
import Node from "@/node.js"
import { Widget } from "@/generated/widgets"

interface Predicate {
  text?: string
  type?: string
  props?: Record<string, any>
}

const textPredicate = (predicate: Predicate, child: Widget) => {
  return (
    !predicate.text ||
    (child.constructor.name === "Label" &&
      child.props.label.trim() === predicate.text.trim())
  )
}

const typePredicate = (predicate: Predicate, child: Widget) => {
  return !predicate.type || child.constructor.name === predicate.type
}

const propsPredicate = (predicate: Predicate, child: Widget) => {
  return (
    !predicate.props ||
    Object.keys(predicate.props).every((key) => {
      return child.props[key] === (predicate.props || {})[key]
    })
  )
}

const predicateFn = (predicate: Predicate, child: Widget) => {
  return (
    textPredicate(predicate, child) &&
    typePredicate(predicate, child) &&
    propsPredicate(predicate, child)
  )
}

export default class Renderer {
  application: Gio.Application
  applicationContainer: Container<Node<Gio.Application>>

  constructor() {
    this.application = new Gtk.Application()
    this.applicationContainer = new Container(createRootNode(this.application))
  }

  setup() {
    jest.useFakeTimers()
    Gio.Application.getDefault = jest.fn(() => this.application)
    this.render(null)
  }

  render(element: React.ReactNode) {
    const mockedConsoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})

    this.applicationContainer.render(element)

    while (jest.getTimerCount() > 0) {
      jest.runAllTimers()
      this.applicationContainer.commit()
    }

    mockedConsoleError.mockRestore()
  }

  findAllBy<T extends Gtk.Widget>(
    predicate: Predicate = {},
    root = this.applicationContainer.rootNode
  ): Widget<T>[] {
    const results = []

    for (const child of root.children) {
      if (predicateFn(predicate, child as Widget)) {
        results.push(child)
      }

      results.push(...this.findAllBy(predicate, child))
    }

    return results as Widget<T>[]
  }

  findBy<T extends Gtk.Widget>(
    predicate = {},
    root = this.applicationContainer.rootNode
  ) {
    return this.findAllBy<T>(predicate, root)[0] ?? null
  }

  fireEvent(widget: Widget, event: string, ...args: any[]) {
    const handler = widget.handlers[event]

    if (!handler) {
      return
    }

    handler(...args)
    jest.runAllTimers()
  }
}
