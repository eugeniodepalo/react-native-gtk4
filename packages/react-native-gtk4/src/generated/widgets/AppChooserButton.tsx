import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class AppChooserButton<
  T extends Gtk.AppChooserButton = Gtk.AppChooserButton,
> extends Widget<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.AppChooserButton({
      content_type: props.contentType,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "heading":
        this.node.setHeading(newValue)
        break
      case "modal":
        this.node.setModal(newValue)
        break
      case "showDefaultItem":
        this.node.setShowDefaultItem(newValue)
        break
      case "showDialogItem":
        this.node.setShowDialogItem(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onCustomItemActivated":
        this.setHandler("custom-item-activated", newValue)
        break
      case "onNotifyHeading":
        this.setHandler("notify::heading", newValue)
        break
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue)
        break
      case "onNotifyShowDefaultItem":
        this.setHandler("notify::show-default-item", newValue)
        break
      case "onNotifyShowDialogItem":
        this.setHandler("notify::show-dialog-item", newValue)
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
