import Gtk from "@girs/node-gtk-4.0"
import Box from "./Box.js"

export default class ShortcutsGroup<
  T extends Gtk.ShortcutsGroup = Gtk.ShortcutsGroup,
> extends Box<T> {
  static createNode() {
    return new Gtk.ShortcutsGroup({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accelSizeGroup":
        this.node.accelSizeGroup = newValue
        break
      case "title":
        if (this.node.title !== newValue) {
          this.node.title = newValue
        }
        break
      case "titleSizeGroup":
        this.node.titleSizeGroup = newValue
        break
      case "view":
        if (this.node.view !== newValue) {
          this.node.view = newValue
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
