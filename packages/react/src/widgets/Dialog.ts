import { Container, Gtk } from ".."
import Window from "./Window"

export default class Dialog extends Window {
  createNode(container: Container) {
    return new Gtk.Dialog()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "useHeaderBar":
        this.node.setUseHeaderBar(newValue)
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
