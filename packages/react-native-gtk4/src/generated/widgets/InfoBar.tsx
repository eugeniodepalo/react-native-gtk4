import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class InfoBar<
  T extends Gtk.InfoBar = Gtk.InfoBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.InfoBar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "messageType":
        this.node.setMessageType(newValue)
        break
      case "revealed":
        this.node.setRevealed(newValue)
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onClose":
        this.setHandler("close", newValue)
        break
      case "onResponse":
        this.setHandler("response", newValue)
        break
      case "onNotifyMessageType":
        this.setHandler("notify::message-type", newValue)
        break
      case "onNotifyRevealed":
        this.setHandler("notify::revealed", newValue)
        break
      case "onNotifyShowCloseButton":
        this.setHandler("notify::show-close-button", newValue)
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
