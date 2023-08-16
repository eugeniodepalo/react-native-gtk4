import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class ColorChooserDialog<
  T extends Gtk.ColorChooserDialog = Gtk.ColorChooserDialog,
> extends Dialog<T> {
  static createNode() {
    return new Gtk.ColorChooserDialog({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "showEditor":
        this.node.showEditor = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "useAlpha":
        this.node.setUseAlpha(newValue)
        break
      case "onColorActivated":
        this.setHandler("color-activated", newValue)
        break
      case "onNotifyShowEditor":
        this.setHandler("notify::show-editor", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyRgba":
        this.setHandler("notify::rgba", newValue)
        break
      case "onNotifyUseAlpha":
        this.setHandler("notify::use-alpha", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
