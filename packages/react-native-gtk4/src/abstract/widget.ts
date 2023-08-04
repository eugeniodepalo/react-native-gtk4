import Gtk from "@girs/node-gtk-4.0"
import AbstractNode from "./node.js"

export default abstract class AbstractWidget<
  T extends Gtk.Widget = Gtk.Widget,
> extends AbstractNode<T, Gtk.Widget> {
  handlers: Record<string, any> = {}
  props: Record<string, any> = {}

  constructor(props: Record<string, any> = {}, node: T) {
    super(node)

    this.props = props

    for (const propName in props) {
      this.set(propName, props[propName])
    }
  }

  abstract set(propName: string, newValue: any): void
  abstract commitMount(): void

  setHandler(handlerName: string, handler: any): void {
    const oldHandler = this.handlers[handlerName]

    if (oldHandler) {
      this.node.off(handlerName, oldHandler)
      delete this.handlers[handlerName]
    }

    if (handler) {
      const newHandler = (...args: any[]) => {
        return handler(this.node, ...args)
      }

      this.node.on(handlerName, newHandler)
      this.handlers[handlerName] = newHandler
    }
  }

  getClosestParentOfType<T>(type: new () => T): T | null {
    let parent = this.parent

    while (parent) {
      if (parent.node instanceof type) {
        return parent.node
      }

      parent = parent.parent
    }

    return null
  }
}
