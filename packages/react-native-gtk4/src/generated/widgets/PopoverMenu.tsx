import Gtk from "@girs/node-gtk-4.0"
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
      case "menuModel":
        if (this.node.getMenuModel() !== newValue) {
          this.node.setMenuModel(newValue)
        }
        break
      case "visibleSubmenu":
        this.node.visibleSubmenu = newValue
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
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
