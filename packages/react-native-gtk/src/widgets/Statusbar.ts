import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class Statusbar extends Widget {
  createNode(container: Container) {
    return new Gtk.Statusbar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onTextPopped":
        if (oldValue) {
          this.node.off("text-popped", oldValue)
        }
        if (newValue) {
          this.node.on("text-popped", newValue)
        }
        break
      case "onTextPushed":
        if (oldValue) {
          this.node.off("text-pushed", oldValue)
        }
        if (newValue) {
          this.node.on("text-pushed", newValue)
        }
        break
      default:
        break
    }
  }
}
