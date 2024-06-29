import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class GraphicsOffload<
  T extends Gtk.GraphicsOffload = Gtk.GraphicsOffload,
> extends Widget<T> {
  static createNode() {
    return new Gtk.GraphicsOffload({})
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enabled":
        this.node.setEnabled(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyEnabled":
        this.setHandler("notify::enabled", newValue)
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
