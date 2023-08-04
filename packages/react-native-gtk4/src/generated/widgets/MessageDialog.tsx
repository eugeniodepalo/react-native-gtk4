import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class MessageDialog<
  T extends Gtk.MessageDialog = Gtk.MessageDialog,
> extends Dialog<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.MessageDialog({
      buttons: props.buttons,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "messageType":
        this.node.messageType = newValue
        break
      case "secondaryText":
        this.node.secondaryText = newValue
        break
      case "secondaryUseMarkup":
        this.node.secondaryUseMarkup = newValue
        break
      case "text":
        this.node.text = newValue
        break
      case "useMarkup":
        this.node.useMarkup = newValue
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyButtons":
        this.setHandler("notify::buttons", newValue)
        break
      case "onNotifyMessageArea":
        this.setHandler("notify::message-area", newValue)
        break
      case "onNotifyMessageType":
        this.setHandler("notify::message-type", newValue)
        break
      case "onNotifySecondaryText":
        this.setHandler("notify::secondary-text", newValue)
        break
      case "onNotifySecondaryUseMarkup":
        this.setHandler("notify::secondary-use-markup", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyUseMarkup":
        this.setHandler("notify::use-markup", newValue)
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
