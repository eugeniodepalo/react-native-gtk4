import Gtk from "@girs/node-gtk-4.0"

export default abstract class AnyWidget<T extends Gtk.Widget = Gtk.Widget> {
  node: T
  children: AnyWidget[] = []
  handlers: Record<string, any> = {}
  props: Record<string, any> = {}

  constructor(props: Record<string, any> = {}) {
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

  appendChild(child: AnyWidget): void {
    this.children.push(child)
  }

  removeChild(child: AnyWidget): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)
  }

  insertBefore(child: AnyWidget, beforeChild: AnyWidget): void {
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
