import Gtk from "@girs/node-gtk-4.0"

export default class Node<T = any> {
  children: Node[] = []
  parent: Node | null = null
  node: T

  constructor(node: T) {
    this.node = node
  }

  appendChild(child: Node): void {
    this.children.push(child)
    child.parent = this
  }

  removeChild(child: Node): void {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Child to be removed not found in parent")
    }

    this.children.splice(index, 1)

    if (child.node instanceof Gtk.Window) {
      child.node.destroy()
    } else if (child.node instanceof Gtk.Widget) {
      child.node.unparent()
    }

    child.parent = null
  }

  insertBefore(child: Node, beforeChild: Node): void {
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

  getClosestParentOfType<T>(type: new () => T): T | null {
    let parent = this.parent

    while (parent) {
      if (parent.node instanceof type) {
        return parent.node
      }

      parent = parent.parent
    }

    return null
  }
}
