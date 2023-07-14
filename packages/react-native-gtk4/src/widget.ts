/* eslint-disable @typescript-eslint/no-unused-vars */
import { Gtk } from "./index.js"

export default abstract class Widget<T extends Gtk.Widget> {
  node: T
  children: Widget<any>[] = []
  props: Record<string, any> = {}

  constructor(props: Record<string, any>) {
    this.props = props
    this.node = this.createNode()
    for (const propName in props) {
      this.set(propName, props[propName], null)
    }
  }

  abstract createNode(): T

  set(propName: string, newValue: any, oldValue: any): void {}

  insertBefore(child: Widget<any>, beforeChild: Widget<any>): void {
    const index = this.children.indexOf(beforeChild) - 1
    if (index < 0) {
      this.children.unshift(child)
      return
    }
    this.children.splice(index, 0, child)
  }

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

  commitMount(): void {
    this.node.show()
  }
}
