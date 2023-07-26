import Gtk from "@girs/node-gtk-4.0"
import AbstractNode from "./node.js"
import { ApplicationContext } from "../components/ApplicationProvider.js"

export default abstract class AbstractWidget<
  T extends Gtk.Widget = Gtk.Widget,
> extends AbstractNode<AbstractWidget> {
  node: T
  handlers: Record<string, any> = {}
  props: Record<string, any> = {}
  context: ApplicationContext

  constructor(props: Record<string, any> = {}, context: ApplicationContext) {
    super()

    this.props = props
    this.node = this.createNode()
    this.context = context

    for (const propName in props) {
      this.set(propName, props[propName])
    }
  }

  abstract createNode(): T
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
}
