import Gtk from "@girs/node-gtk-4.0"
import Box from "./Box.js"

export default class ShortcutsSection<
  T extends Gtk.ShortcutsSection = Gtk.ShortcutsSection,
> extends Box<T> {
  static createNode() {
    return new Gtk.ShortcutsSection({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "maxHeight":
        if (this.node.maxHeight !== newValue) {
          this.node.maxHeight = newValue
        }
        break
      case "sectionName":
        if (this.node.sectionName !== newValue) {
          this.node.sectionName = newValue
        }
        break
      case "title":
        if (this.node.title !== newValue) {
          this.node.title = newValue
        }
        break
      case "viewName":
        if (this.node.viewName !== newValue) {
          this.node.viewName = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onChangeCurrentPage":
        this.setHandler("change-current-page", newValue)
        break
      case "onNotifyMaxHeight":
        this.setHandler("notify::max-height", newValue)
        break
      case "onNotifySectionName":
        this.setHandler("notify::section-name", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyViewName":
        this.setHandler("notify::view-name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
