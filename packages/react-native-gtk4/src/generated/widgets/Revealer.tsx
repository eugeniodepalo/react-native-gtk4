import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Revealer<
  T extends Gtk.Revealer = Gtk.Revealer,
> extends Widget<T> {
  createNode() {
    return new Gtk.Revealer({}) as T
  }
  appendChild(child: Widget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget, beforeChild: Widget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "revealChild":
        if (this.node.revealChild !== newValue) {
          this.node.setRevealChild(newValue)
        }
        break
      case "transitionDuration":
        if (this.node.transitionDuration !== newValue) {
          this.node.setTransitionDuration(newValue)
        }
        break
      case "transitionType":
        if (this.node.transitionType !== newValue) {
          this.node.setTransitionType(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
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
    }
  }
}
