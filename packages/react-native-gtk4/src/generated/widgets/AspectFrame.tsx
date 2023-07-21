import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AnyWidget from "../../widget.js"

export default class AspectFrame<
  T extends Gtk.AspectFrame = Gtk.AspectFrame,
> extends Widget<T> {
  createNode() {
    return new Gtk.AspectFrame({}) as T
  }
  appendChild(child: AnyWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AnyWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AnyWidget, beforeChild: AnyWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "obeyChild":
        if (this.node.getObeyChild() !== newValue) {
          this.node.setObeyChild(newValue)
        }
        break
      case "ratio":
        if (this.node.getRatio() !== newValue) {
          this.node.setRatio(newValue)
        }
        break
      case "xalign":
        if (this.node.getXalign() !== newValue) {
          this.node.setXalign(newValue)
        }
        break
      case "yalign":
        if (this.node.getYalign() !== newValue) {
          this.node.setYalign(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
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
      default:
        break
    }
  }
}
