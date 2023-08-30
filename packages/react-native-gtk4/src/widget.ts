import Gtk from "@girs/node-gtk-4.0"
import AbstractNode from "./node.js"

export default abstract class AbstractWidget<
  T extends Gtk.Widget = Gtk.Widget,
> extends AbstractNode<T> {
  handlers: Record<string, any> = {}
  props: Record<string, any> = {}

  abstract set(propName: string, newValue: any): void
  abstract commitMount(): void

  constructor(props: Record<string, any> = {}, node: T) {
    super(node)

    this.props = props

    for (const propName in props) {
      this.set(propName, props[propName])
    }
  }

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
}
