import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class PageSetupUnixDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.PageSetupUnixDialog()
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
