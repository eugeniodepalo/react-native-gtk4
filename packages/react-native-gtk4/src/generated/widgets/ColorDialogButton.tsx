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
        this.node.setDialog(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
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
