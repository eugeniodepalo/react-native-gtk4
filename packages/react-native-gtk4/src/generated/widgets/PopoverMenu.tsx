import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Popover from "./Popover.js"

export default class PopoverMenu<
  T extends Gtk.PopoverMenu = Gtk.PopoverMenu,
> extends Popover<T> {
  static createNode() {
    return new Gtk.PopoverMenu({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "flags":
        this.node.setFlags(newValue)
        break
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "visibleSubmenu":
        this.node.visibleSubmenu = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyFlags":
        this.setHandler("notify::flags", newValue)
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
        break
      case "onNotifyVisibleSubmenu":
        this.setHandler("notify::visible-submenu", newValue)
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
