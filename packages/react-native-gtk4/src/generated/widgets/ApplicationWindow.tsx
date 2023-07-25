import Gtk from "@girs/node-gtk-4.0"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow = Gtk.ApplicationWindow,
> extends Window<T> {
  createNode() {
    return new Gtk.ApplicationWindow({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "showMenubar":
        if (this.node.getShowMenubar() !== newValue) {
          this.node.setShowMenubar(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyShowMenubar":
        this.setHandler("notify::show-menubar", newValue)
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
