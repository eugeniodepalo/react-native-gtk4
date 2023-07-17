import { Gtk } from "./index.js"

export default abstract class Widget<T extends Gtk.Widget = Gtk.Widget> {
  node: T
  children: Widget[] = []
  handlers: Record<string, any> = {}
  props: Record<string, any> = {}

  constructor(props: Record<string, any>) {
    this.props = props
    this.node = this.createNode()

    for (const propName in props) {
      this.set(propName, props[propName], null)
    }
  }

  abstract createNode(): T

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set(propName: string, newValue: any, oldValue: any): void {}

  commitMount(): void {}

  appendChild(child: Widget<any>): void {
    this.children.push(child)
  }

  removeChild(child: Widget<any>): void {
    const index = this.children.indexOf(child)

    if (index < 0) {
      return
    }

    this.children.splice(index, 1)
  }

  insertBefore(child: Widget<any>, beforeChild: Widget<any>): void {
    const index = this.children.indexOf(beforeChild) - 1

    if (index < 0) {
      this.children.unshift(child)
      return
    }

    this.children.splice(index, 0, child)
  }

  setHandler(handlerName: string, handler: any): void {
    const oldHandler = this.handlers[handlerName]

    if (oldHandler) {
      this.node.off(handlerName, oldHandler)
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
