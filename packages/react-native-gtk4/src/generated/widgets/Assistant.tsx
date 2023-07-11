import { Container, Gtk } from "../../index.js"
import Window from "./Window.js"

export default class Assistant<T extends Gtk.Assistant> extends Window<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Assistant() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "onApply":
        if (oldValue) {
          this.node.off("apply", oldValue)
        }
        if (newValue) {
          this.node.on("apply", newValue)
        }
        break
      case "onCancel":
        if (oldValue) {
          this.node.off("cancel", oldValue)
        }
        if (newValue) {
          this.node.on("cancel", newValue)
        }
        break
      case "onClose":
        if (oldValue) {
          this.node.off("close", oldValue)
        }
        if (newValue) {
          this.node.on("close", newValue)
        }
        break
      case "onEscape":
        if (oldValue) {
          this.node.off("escape", oldValue)
        }
        if (newValue) {
          this.node.on("escape", newValue)
        }
        break
      case "onPrepare":
        if (oldValue) {
          this.node.off("prepare", oldValue)
        }
        if (newValue) {
          this.node.on("prepare", newValue)
        }
        break
    }
  }
}
