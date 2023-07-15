import { Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsGroup<
  T extends Gtk.ShortcutsGroup,
> extends Box<T> {
  createNode() {
    return new Gtk.ShortcutsGroup({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelSizeGroup":
        this.node.accelSizeGroup = newValue
        break
      case "title":
        this.node.title = newValue
        break
      case "titleSizeGroup":
        this.node.titleSizeGroup = newValue
        break
      case "view":
        this.node.view = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
