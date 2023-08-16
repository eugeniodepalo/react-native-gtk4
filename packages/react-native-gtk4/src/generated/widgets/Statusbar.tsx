import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Statusbar<
  T extends Gtk.Statusbar = Gtk.Statusbar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Statusbar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onTextPopped":
        this.setHandler("text-popped", newValue)
        break
      case "onTextPushed":
        this.setHandler("text-pushed", newValue)
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
