import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class WindowControls<
  T extends Gtk.WindowControls = Gtk.WindowControls,
> extends Widget<T> {
  createNode() {
    return new Gtk.WindowControls({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "decorationLayout":
        this.node.setDecorationLayout(newValue)
        break
      case "side":
        this.node.setSide(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decoration-layout", newValue)
        break
      case "onNotifyEmpty":
        this.setHandler("notify::empty", newValue)
        break
      case "onNotifySide":
        this.setHandler("notify::side", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
