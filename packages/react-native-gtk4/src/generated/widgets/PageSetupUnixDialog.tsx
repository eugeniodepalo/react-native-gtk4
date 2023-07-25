import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class PageSetupUnixDialog<
  T extends Gtk.PageSetupUnixDialog = Gtk.PageSetupUnixDialog,
> extends Dialog<T> {
  createNode() {
    return new Gtk.PageSetupUnixDialog({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
