import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class AppChooserDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.AppChooserDialog()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "gfile":
        this.node.setGfile(newValue)
        break
      case "heading":
        this.node.setHeading(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "contentType":
        this.node.setContentType(newValue)
        break
      default:
        break
    }
  }
}
