import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Fixed extends Widget {
  createNode(container: Container) {
    return new Gtk.Fixed()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
