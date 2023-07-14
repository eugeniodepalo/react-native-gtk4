import { Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class PopoverMenu<T extends Gtk.PopoverMenu> extends Popover<T> {
  createNode() {
    return new Gtk.PopoverMenu(this.props.model) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
    }
  }
}
