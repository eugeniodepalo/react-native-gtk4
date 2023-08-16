import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Separator<
  T extends Gtk.Separator = Gtk.Separator,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Separator({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
