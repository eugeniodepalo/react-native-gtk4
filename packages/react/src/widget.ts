import { Container } from "."

export default abstract class Widget {
  node: any
  container: Container

  constructor(container: Container, props: Record<string, any>) {
    this.node = this.createNode(container)
    this.container = container
    for (const propName in props) {
      this.set(propName, props[propName], null)
    }
  }

  abstract createNode(container: Container): any

  set(propName: string, newValue: any, oldValue: any): void {}

  appendChild(child: Widget): void {
    throw new Error("Method not implemented.")
  }
  removeChild(child: Widget): void {
    throw new Error("Method not implemented.")
  }
  commitMount(): void {
    this.node.show()
  }
}
