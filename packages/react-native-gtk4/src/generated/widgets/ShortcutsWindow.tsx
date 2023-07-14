import { Gtk } from "../../index.js"
import Window from "./Window.js"

export default class ShortcutsWindow<
  T extends Gtk.ShortcutsWindow,
> extends Window<T> {
  createNode() {
    return new Gtk.ShortcutsWindow() as T
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
      case "onSearch":
        if (oldValue) {
          this.node.off("search", oldValue)
        }
        if (newValue) {
          this.node.on("search", newValue)
        }
        break
    }
  }
}
