import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow,
> extends Window<T> {
  createNode() {
    return new Gtk.ApplicationWindow({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
