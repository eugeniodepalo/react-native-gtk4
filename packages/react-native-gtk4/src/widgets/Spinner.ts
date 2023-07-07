import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Spinner extends Widget {
  createNode(container: Container) {
    return new Gtk.Spinner()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "spinning":
        this.node.setSpinning(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
