import { Container, Gtk } from ".."
import Widget from "../widget"

export default class InfoBar extends Widget {
  createNode(container: Container) {
    return new Gtk.InfoBar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "messageType":
        this.node.setMessageType(newValue)
        break
      case "revealed":
        this.node.setRevealed(newValue)
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onClose":
        if (oldValue) {
          this.node.off("close", oldValue)
        }
        if (newValue) {
          this.node.on("close", newValue)
        }
        break
      case "onResponse":
        if (oldValue) {
          this.node.off("response", oldValue)
        }
        if (newValue) {
          this.node.on("response", newValue)
        }
        break
      default:
        break
    }
  }
}
