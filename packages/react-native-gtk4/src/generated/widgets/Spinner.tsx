import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Spinner<T extends Gtk.Spinner> extends Widget<T> {
  createNode() {
    return new Gtk.Spinner({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "spinning":
        this.node.setSpinning(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifySpinning":
        this.setHandler("notify::spinning", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
