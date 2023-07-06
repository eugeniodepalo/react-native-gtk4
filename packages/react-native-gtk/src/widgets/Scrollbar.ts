import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class Scrollbar extends Widget {
  createNode(container: Container) {
    return new Gtk.Scrollbar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
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
