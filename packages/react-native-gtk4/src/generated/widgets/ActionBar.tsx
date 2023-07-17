import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ActionBar<
  T extends Gtk.ActionBar = Gtk.ActionBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.ActionBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "revealed":
        this.node.setRevealed(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyRevealed":
        this.setHandler("notify::revealed", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
