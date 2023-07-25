import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class ColorChooserDialog<
  T extends Gtk.ColorChooserDialog = Gtk.ColorChooserDialog,
> extends Dialog<T> {
  createNode() {
    return new Gtk.ColorChooserDialog({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "showEditor":
        if (this.node.showEditor !== newValue) {
          this.node.showEditor = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "rgba":
        if (this.node.getRgba() !== newValue) {
          this.node.setRgba(newValue)
        }
        break
      case "useAlpha":
        if (this.node.getUseAlpha() !== newValue) {
          this.node.setUseAlpha(newValue)
        }
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
