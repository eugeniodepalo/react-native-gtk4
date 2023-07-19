import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class PopoverMenuBar<
  T extends Gtk.PopoverMenuBar = Gtk.PopoverMenuBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.PopoverMenuBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        if (this.node.getMenuModel !== newValue) {
          this.node.setMenuModel(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
