import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class AppChooserDialog<
  T extends Gtk.AppChooserDialog = Gtk.AppChooserDialog,
> extends Dialog<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.AppChooserDialog({
      gfile: props.gfile,
      content_type: props.contentType,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "heading":
        this.node.setHeading(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
