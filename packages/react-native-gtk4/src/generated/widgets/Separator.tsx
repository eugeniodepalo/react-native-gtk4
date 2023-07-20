import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Separator<
  T extends Gtk.Separator = Gtk.Separator,
> extends Widget<T> {
  createNode() {
    return new Gtk.Separator({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
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
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
