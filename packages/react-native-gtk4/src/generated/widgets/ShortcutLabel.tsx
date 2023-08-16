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
        this.node.setAccelerator(newValue)
        break
      case "disabledText":
        this.node.setDisabledText(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
