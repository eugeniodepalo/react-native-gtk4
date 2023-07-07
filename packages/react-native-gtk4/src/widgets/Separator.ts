import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Separator extends Widget {
  createNode(container: Container) {
    return new Gtk.Separator()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
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
