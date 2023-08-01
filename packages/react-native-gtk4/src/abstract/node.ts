export default abstract class AbstractNode<T> {
  children: T[] = []

  appendChild(child: T): void {
    this.children.push(child)
  }

  removeChild(child: T): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Child to be removed not found in parent")
    }

    this.children.splice(index, 1)
  }

  insertBefore(child: T, beforeChild: T): void {
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
  }
}
