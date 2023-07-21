import Gtk from "@girs/node-gtk-4.0"
import ComboBox from "./ComboBox.js"

export default class ComboBoxText<
  T extends Gtk.ComboBoxText = Gtk.ComboBoxText,
> extends ComboBox<T> {
  createNode() {
    return new Gtk.ComboBoxText({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editingCanceled":
        if (this.node.editingCanceled !== newValue) {
          this.node.editingCanceled = newValue
        }
        break
      case "onEditingDone":
        this.setHandler("editing-done", newValue)
        break
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyEditingCanceled":
        this.setHandler("notify::editing-canceled", newValue)
        break
      default:
        break
    }
  }
}
