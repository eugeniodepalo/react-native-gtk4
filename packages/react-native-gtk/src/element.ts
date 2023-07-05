import { Container } from "."

export default abstract class Element {
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
  abstract set(propName: string, newValue: any, oldValue: any): void
  appendChild(child: Element): void {}
  removeChild(child: Element): void {}

  commitMount(): void {
    this.node.show()
  }
}
