import Gtk from "@girs/node-gtk-4.0"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow = Gtk.ApplicationWindow,
> extends Window<T> {
  static createNode() {
    return new Gtk.ApplicationWindow({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
