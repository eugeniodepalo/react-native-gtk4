import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Spinner<
  T extends Gtk.Spinner = Gtk.Spinner,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Spinner({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "spinning":
        this.node.setSpinning(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifySpinning":
        this.setHandler("notify::spinning", newValue)
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
