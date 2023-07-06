import { Container, Gtk } from ".."
import Widget from "../widget"

export default class PopoverMenuBar extends Widget {
  createNode(container: Container) {
    return new Gtk.PopoverMenuBar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
