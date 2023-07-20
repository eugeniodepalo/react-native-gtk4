import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class StackSidebar<
  T extends Gtk.StackSidebar = Gtk.StackSidebar,
> extends Widget<T> {
  createNode() {
    return new Gtk.StackSidebar({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "stack":
        if (this.node.getStack !== newValue) {
          this.node.setStack(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
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
