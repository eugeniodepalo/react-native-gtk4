import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class AppChooserButton<
  T extends Gtk.AppChooserButton,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.AppChooserButton(props.contentType) as T
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
    }
  }
}
