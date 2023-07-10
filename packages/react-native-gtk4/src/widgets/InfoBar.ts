import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class InfoBar<T extends Gtk.InfoBar> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.InfoBar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
      case "onClose":
        if (oldValue) {
          this.node.off("close", oldValue)
        }
        if (newValue) {
          this.node.on("close", newValue)
        }
        break
      case "onResponse":
        if (oldValue) {
          this.node.off("response", oldValue)
        }
        if (newValue) {
          this.node.on("response", newValue)
        }
        break
      default:
        break
    }
  }
}
