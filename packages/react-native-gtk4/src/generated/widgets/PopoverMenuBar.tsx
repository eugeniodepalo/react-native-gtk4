import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class PopoverMenuBar<
  T extends Gtk.PopoverMenuBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.PopoverMenuBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
