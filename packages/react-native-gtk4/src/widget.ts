/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Gtk } from "./index.js"

export default abstract class Widget<T extends Gtk.Widget> {
  node: T
  container: Container

  constructor(container: Container, props: Record<string, any>) {
    this.node = this.createNode(container, props)
    this.container = container
    for (const propName in props) {
      this.set(propName, props[propName], null)
    }
  }

  abstract createNode(container: Container, props: Record<string, any>): T

  set(propName: string, newValue: any, oldValue: any): void {}

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
