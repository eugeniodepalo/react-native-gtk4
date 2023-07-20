import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Fixed<T extends Gtk.Fixed = Gtk.Fixed> extends Widget<T> {
  createNode() {
    return new Gtk.Fixed({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
