import { Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsGroup<
  T extends Gtk.ShortcutsGroup = Gtk.ShortcutsGroup,
> extends Box<T> {
  createNode() {
    return new Gtk.ShortcutsGroup({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelSizeGroup":
        if (this.node.accelSizeGroup !== newValue) {
          this.node.accelSizeGroup = newValue
        }
        break
      case "title":
        if (this.node.title !== newValue) {
          this.node.title = newValue
        }
        break
      case "titleSizeGroup":
        if (this.node.titleSizeGroup !== newValue) {
          this.node.titleSizeGroup = newValue
        }
        break
      case "view":
        if (this.node.view !== newValue) {
          this.node.view = newValue
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onNotifyAccelSizeGroup":
        this.setHandler("notify::accel-size-group", newValue)
        break
      case "onNotifyHeight":
        this.setHandler("notify::height", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyTitleSizeGroup":
        this.setHandler("notify::title-size-group", newValue)
        break
      case "onNotifyView":
        this.setHandler("notify::view", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
