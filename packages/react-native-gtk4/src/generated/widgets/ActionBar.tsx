import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ActionBar<
  T extends Gtk.ActionBar = Gtk.ActionBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ActionBar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "revealed":
        if (this.node.getRevealed() !== newValue) {
          this.node.setRevealed(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyRevealed":
        this.setHandler("notify::revealed", newValue)
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
