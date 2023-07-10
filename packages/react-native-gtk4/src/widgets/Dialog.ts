import { Container, Gtk } from "../index.js"
import Window from "./Window.js"

export default class Dialog<T extends Gtk.Dialog> extends Window<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Dialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
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
