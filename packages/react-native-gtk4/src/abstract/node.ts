export default abstract class AbstractNode<T> {
  children: T[] = []

  appendChild(child: T): void {
    this.children.push(child)
  }

  removeChild(child: T): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)
  }

  insertBefore(child: T, beforeChild: T): void {
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
}
