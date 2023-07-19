import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class StackSidebar<
  T extends Gtk.StackSidebar = Gtk.StackSidebar,
> extends Widget<T> {
  createNode() {
    return new Gtk.StackSidebar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "stack":
        if (this.node.stack !== newValue) {
          this.node.setStack(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyStack":
        this.setHandler("notify::stack", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
