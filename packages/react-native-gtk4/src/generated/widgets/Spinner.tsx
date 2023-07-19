import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Spinner<
  T extends Gtk.Spinner = Gtk.Spinner,
> extends Widget<T> {
  createNode() {
    return new Gtk.Spinner({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "spinning":
        if (this.node.getSpinning !== newValue) {
          this.node.setSpinning(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
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
