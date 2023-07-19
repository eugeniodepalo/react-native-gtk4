import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ColorDialogButton<
  T extends Gtk.ColorDialogButton = Gtk.ColorDialogButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.ColorDialogButton({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        if (this.node.dialog !== newValue) {
          this.node.setDialog(newValue)
        }
        break
      case "rgba":
        if (this.node.rgba !== newValue) {
          this.node.setRgba(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyDialog":
        this.setHandler("notify::dialog", newValue)
        break
      case "onNotifyRgba":
        this.setHandler("notify::rgba", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
