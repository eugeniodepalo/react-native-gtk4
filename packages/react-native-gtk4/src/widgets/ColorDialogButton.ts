import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ColorDialogButton extends Widget {
  createNode(container: Container) {
    return new Gtk.ColorDialogButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
