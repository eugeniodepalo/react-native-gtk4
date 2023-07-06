import { Container, Gtk } from ".."
import Window from "./Window"

export default class ApplicationWindow extends Window {
  createNode(container: Container) {
    return new Gtk.ApplicationWindow()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
