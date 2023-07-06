import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class AppChooserButton extends Widget {
  createNode(container: Container) {
    return new Gtk.AppChooserButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
        this.node.setAccessibleRole(newValue)
        break
      case "contentType":
        this.node.setContentType(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onChanged":
        if (oldValue) {
          this.node.off("changed", oldValue)
        }
        if (newValue) {
          this.node.on("changed", newValue)
        }
        break
      case "onCustomItemActivated":
        if (oldValue) {
          this.node.off("custom-item-activated", oldValue)
        }
        if (newValue) {
          this.node.on("custom-item-activated", newValue)
        }
        break
      default:
        break
    }
  }
}
