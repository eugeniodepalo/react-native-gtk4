import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class StackSidebar extends Widget {
  createNode(container: Container) {
    return new Gtk.StackSidebar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "stack":
        this.node.setStack(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
