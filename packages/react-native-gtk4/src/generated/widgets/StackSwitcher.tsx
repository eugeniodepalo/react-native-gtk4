import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class StackSwitcher<
  T extends Gtk.StackSwitcher = Gtk.StackSwitcher,
> extends Widget<T> {
  static createNode() {
    return new Gtk.StackSwitcher({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "stack":
        this.node.setStack(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue)
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
