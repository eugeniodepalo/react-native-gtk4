import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Overlay<T extends Gtk.Overlay> extends Widget<T> {
  createNode() {
    return new Gtk.Overlay({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onGetChildPosition":
        if (oldValue) {
          this.node.off("get-child-position", oldValue)
        }
        if (newValue) {
          this.node.on("get-child-position", newValue)
        }
        break
    }
  }
}
