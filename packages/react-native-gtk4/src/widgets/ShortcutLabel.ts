import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ShortcutLabel extends Widget {
  createNode(container: Container) {
    return new Gtk.ShortcutLabel()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelerator":
        this.node.setAccelerator(newValue)
        break
      case "disabledText":
        this.node.setDisabledText(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
