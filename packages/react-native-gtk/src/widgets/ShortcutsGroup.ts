import { Container, Gtk } from ".."
import Box from "./Box"

export default class ShortcutsGroup extends Box {
  createNode(container: Container) {
    return new Gtk.ShortcutsGroup()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelSizeGroup":
        this.node.setAccelSizeGroup(newValue)
        break
      case "height":
        this.node.setHeight(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "titleSizeGroup":
        this.node.setTitleSizeGroup(newValue)
        break
      case "view":
        this.node.setView(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
