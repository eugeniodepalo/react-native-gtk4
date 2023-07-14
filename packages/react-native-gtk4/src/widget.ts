/* eslint-disable @typescript-eslint/no-unused-vars */
import { Gtk } from "./index.js"

export default abstract class Widget<T extends Gtk.Widget> {
  node: T

  constructor(props: Record<string, any>) {
    this.node = this.createNode(props)
    for (const propName in props) {
      this.set(propName, props[propName], null)
    }
  }

  abstract createNode(props: Record<string, any>): T

  set(propName: string, newValue: any, oldValue: any): void {}

  insertBefore(child: Widget<any>, beforeChild: Widget<any>): void {
    throw new Error("Method not implemented.")
  }

  appendChild(child: Widget<any>): void {
    throw new Error("Method not implemented.")
  }

  removeChild(child: Widget<any>): void {
    throw new Error("Method not implemented.")
  }

  commitMount(): void {
    this.node.show()
  }
}
