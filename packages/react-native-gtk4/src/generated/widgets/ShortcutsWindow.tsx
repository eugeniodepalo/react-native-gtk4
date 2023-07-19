import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class ShortcutsWindow<
  T extends Gtk.ShortcutsWindow = Gtk.ShortcutsWindow,
> extends Window<T> {
  createNode() {
    return new Gtk.ShortcutsWindow({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "sectionName":
        if (this.node.sectionName !== newValue) {
          this.node.sectionName = newValue
        }
        break
      case "viewName":
        if (this.node.viewName !== newValue) {
          this.node.viewName = newValue
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onSearch":
        this.setHandler("search", newValue)
        break
      case "onNotifySectionName":
        this.setHandler("notify::section-name", newValue)
        break
      case "onNotifyViewName":
        this.setHandler("notify::view-name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
