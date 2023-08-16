import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class PopoverMenuBar<
  T extends Gtk.PopoverMenuBar = Gtk.PopoverMenuBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.PopoverMenuBar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
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
