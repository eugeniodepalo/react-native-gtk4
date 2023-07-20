import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Scrollbar<
  T extends Gtk.Scrollbar = Gtk.Scrollbar,
> extends Widget<T> {
  createNode() {
    return new Gtk.Scrollbar({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "adjustment":
        if (this.node.getAdjustment !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
