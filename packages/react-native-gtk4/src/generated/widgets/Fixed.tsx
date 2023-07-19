import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Fixed<T extends Gtk.Fixed = Gtk.Fixed> extends Widget<T> {
  createNode() {
    return new Gtk.Fixed({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
