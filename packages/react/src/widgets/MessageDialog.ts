import { Container, Gtk } from ".."
import Dialog from "./Dialog"

export default class MessageDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.MessageDialog()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "buttons":
        this.node.setButtons(newValue)
        break
      case "messageArea":
        this.node.setMessageArea(newValue)
        break
      case "messageType":
        this.node.setMessageType(newValue)
        break
      case "secondaryText":
        this.node.setSecondaryText(newValue)
        break
      case "secondaryUseMarkup":
        this.node.setSecondaryUseMarkup(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "useMarkup":
        this.node.setUseMarkup(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
