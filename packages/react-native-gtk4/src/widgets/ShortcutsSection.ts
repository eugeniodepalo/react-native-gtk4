import { Container, Gtk } from "../index.js"
import Box from "./Box.js"

export default class ShortcutsSection extends Box {
  createNode(container: Container) {
    return new Gtk.ShortcutsSection()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "maxHeight":
        this.node.setMaxHeight(newValue)
        break
      case "sectionName":
        this.node.setSectionName(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "viewName":
        this.node.setViewName(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onChangeCurrentPage":
        if (oldValue) {
          this.node.off("change-current-page", oldValue)
        }
        if (newValue) {
          this.node.on("change-current-page", newValue)
        }
        break
      default:
        break
    }
  }
}
