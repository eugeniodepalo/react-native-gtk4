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
      this.set(propName, props[propName])
    }
  }

  abstract createNode(): T

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set(propName: string, newValue: any): void {}

  commitMount(): void {}

  appendChild(child: Widget): void {
    this.children.push(child)
  }

  removeChild(child: Widget): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)
  }

  insertBefore(child: Widget, beforeChild: Widget): void {
    const beforeIndex = this.children.indexOf(beforeChild)
    const index = beforeIndex - 1

    if (beforeIndex === -1) {
      throw new Error("Before child not found")
    }

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
