import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ShortcutLabel<
  T extends Gtk.ShortcutLabel = Gtk.ShortcutLabel,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ShortcutLabel({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accelerator":
        if (this.node.getAccelerator() !== newValue) {
          this.node.setAccelerator(newValue)
        }
        break
      case "disabledText":
        if (this.node.getDisabledText() !== newValue) {
          this.node.setDisabledText(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyAccelerator":
        this.setHandler("notify::accelerator", newValue)
        break
      case "onNotifyDisabledText":
        this.setHandler("notify::disabled-text", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
