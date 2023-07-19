import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow = Gtk.ApplicationWindow,
> extends Window<T> {
  createNode() {
    return new Gtk.ApplicationWindow({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showMenubar":
        if (this.node.showMenubar !== newValue) {
          this.node.setShowMenubar(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyShowMenubar":
        this.setHandler("notify::show-menubar", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
