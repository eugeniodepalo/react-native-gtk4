import { Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsSection<
  T extends Gtk.ShortcutsSection,
> extends Box<T> {
  createNode() {
    return new Gtk.ShortcutsSection() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "maxHeight":
        this.node.maxHeight = newValue
        break
      case "sectionName":
        this.node.sectionName = newValue
        break
      case "title":
        this.node.title = newValue
        break
      case "viewName":
        this.node.viewName = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
    }
  }
}
