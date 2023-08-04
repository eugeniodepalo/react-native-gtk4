import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class StackSidebar<
  T extends Gtk.StackSidebar = Gtk.StackSidebar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.StackSidebar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "stack":
        if (this.node.getStack() !== newValue) {
          this.node.setStack(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue)
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
