import { Container, Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class PopoverMenu<T extends Gtk.PopoverMenu> extends Popover<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.PopoverMenu(props.model) as T
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
