import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class WindowControls<
  T extends Gtk.WindowControls = Gtk.WindowControls,
> extends Widget<T> {
  static createNode() {
    return new Gtk.WindowControls({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
