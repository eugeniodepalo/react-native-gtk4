export default abstract class AbstractNode<T = any, U = any> {
  children: AbstractNode<U>[] = []
  parent: AbstractNode<U> | null = null
  node: T

  constructor(node: T) {
    this.node = node
  }

  appendChild(child: AbstractNode<U>): void {
    this.children.push(child)
    child.parent = this
  }

  removeChild(child: AbstractNode<U>): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Child to be removed not found in parent")
    }

    this.children.splice(index, 1)
    child.parent = null
  }

  insertBefore(child: AbstractNode<U>, beforeChild: AbstractNode<U>): void {
    const beforeIndex = this.children.indexOf(beforeChild)
    const index = beforeIndex - 1

    if (beforeIndex === -1) {
      throw new Error("Node before which to insert child not found in parent")
    }

    if (index < 0) {
      this.children.unshift(child)
      return
    }

    this.children.splice(index, 0, child)
    child.parent = this
  }
}
