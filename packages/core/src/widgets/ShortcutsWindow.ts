import { Container, Gtk } from ".."
import Window from "./Window"

export default class ShortcutsWindow extends Window {
  createNode(container: Container) {
    return new Gtk.ShortcutsWindow()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "sectionName":
        this.node.setSectionName(newValue)
        break
      case "viewName":
        this.node.setViewName(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onClose":
        if (oldValue) {
          this.node.off("close", oldValue)
        }
        if (newValue) {
          this.node.on("close", newValue)
        }
        break
      case "onSearch":
        if (oldValue) {
          this.node.off("search", oldValue)
        }
        if (newValue) {
          this.node.on("search", newValue)
        }
        break
      default:
        break
    }
  }
}
