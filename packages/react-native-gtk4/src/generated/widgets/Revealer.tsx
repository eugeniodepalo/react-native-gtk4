import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AnyWidget from "../../widget.js"

export default class Revealer<
  T extends Gtk.Revealer = Gtk.Revealer,
> extends Widget<T> {
  createNode() {
    return new Gtk.Revealer({}) as T
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
      case "revealChild":
        if (this.node.getRevealChild() !== newValue) {
          this.node.setRevealChild(newValue)
        }
        break
      case "transitionDuration":
        if (this.node.getTransitionDuration() !== newValue) {
          this.node.setTransitionDuration(newValue)
        }
        break
      case "transitionType":
        if (this.node.getTransitionType() !== newValue) {
          this.node.setTransitionType(newValue)
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
      case "onNotifyChildRevealed":
        this.setHandler("notify::child-revealed", newValue)
        break
      case "onNotifyRevealChild":
        this.setHandler("notify::reveal-child", newValue)
        break
      case "onNotifyTransitionDuration":
        this.setHandler("notify::transition-duration", newValue)
        break
      case "onNotifyTransitionType":
        this.setHandler("notify::transition-type", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
