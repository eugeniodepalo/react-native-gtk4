import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class AspectFrame<
  T extends Gtk.AspectFrame = Gtk.AspectFrame,
> extends Widget<T> {
  static createNode() {
    return new Gtk.AspectFrame({})
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
      case "obeyChild":
        this.node.setObeyChild(newValue)
        break
      case "ratio":
        this.node.setRatio(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
        break
      case "yalign":
        this.node.setYalign(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyObeyChild":
        this.setHandler("notify::obey-child", newValue)
        break
      case "onNotifyRatio":
        this.setHandler("notify::ratio", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      case "onNotifyYalign":
        this.setHandler("notify::yalign", newValue)
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
