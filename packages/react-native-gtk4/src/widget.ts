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

  insertBefore(child: Widget<any>, beforeChild: Widget<any>): void {}

  appendChild(child: Widget<any>): void {}

  removeChild(child: Widget<any>): void {}

  commitMount(): void {
    this.node.show()
  }
}
