import { Container, Gtk } from "../index.js"
import Popover from "./Popover.js"

export default class PopoverMenu extends Popover {
  createNode(container: Container) {
    return new Gtk.PopoverMenu()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "visibleSubmenu":
        this.node.setVisibleSubmenu(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
