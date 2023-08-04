import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ColorDialogButton<
  T extends Gtk.ColorDialogButton = Gtk.ColorDialogButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ColorDialogButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "dialog":
        if (this.node.getDialog() !== newValue) {
          this.node.setDialog(newValue)
        }
        break
      case "rgba":
        if (this.node.getRgba() !== newValue) {
          this.node.setRgba(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
