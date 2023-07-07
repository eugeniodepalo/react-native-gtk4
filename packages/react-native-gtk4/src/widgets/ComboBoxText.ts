import { Container, Gtk } from "../index.js"
import ComboBox from "./ComboBox.js"

export default class ComboBoxText extends ComboBox {
  createNode(container: Container) {
    return new Gtk.ComboBoxText()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "editingCanceled":
        this.node.setEditingCanceled(newValue)
        break
      case "onEditingDone":
        if (oldValue) {
          this.node.off("editing-done", oldValue)
        }
        if (newValue) {
          this.node.on("editing-done", newValue)
        }
        break
      case "onRemoveWidget":
        if (oldValue) {
          this.node.off("remove-widget", oldValue)
        }
        if (newValue) {
          this.node.on("remove-widget", newValue)
        }
        break
      default:
        break
    }
  }
}
