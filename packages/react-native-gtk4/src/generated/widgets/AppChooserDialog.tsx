import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class AppChooserDialog<
  T extends Gtk.AppChooserDialog = Gtk.AppChooserDialog,
> extends Dialog<T> {
  createNode() {
    return new Gtk.AppChooserDialog({
      gfile: this.props.gfile,
      contentType: this.props.contentType,
    }) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "heading":
        if (this.node.getHeading() !== newValue) {
          this.node.setHeading(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyGfile":
        this.setHandler("notify::gfile", newValue)
        break
      case "onNotifyHeading":
        this.setHandler("notify::heading", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyContentType":
        this.setHandler("notify::content-type", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
