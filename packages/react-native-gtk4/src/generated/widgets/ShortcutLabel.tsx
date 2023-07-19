import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutLabel<
  T extends Gtk.ShortcutLabel = Gtk.ShortcutLabel,
> extends Widget<T> {
  createNode() {
    return new Gtk.ShortcutLabel({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelerator":
        if (this.node.accelerator !== newValue) {
          this.node.setAccelerator(newValue)
        }
        break
      case "disabledText":
        if (this.node.disabledText !== newValue) {
          this.node.setDisabledText(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
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
    }
  }
}
