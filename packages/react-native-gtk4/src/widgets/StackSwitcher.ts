import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class StackSwitcher extends Widget {
  createNode(container: Container) {
    return new Gtk.StackSwitcher()
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
