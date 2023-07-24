import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../abstract/widget.js"

export default class Frame<T extends Gtk.Frame = Gtk.Frame> extends Widget<T> {
  createNode() {
    return new Gtk.Frame({}) as T
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
      case "label":
        if (this.node.getLabel() !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "labelWidget":
        if (this.node.getLabelWidget() !== newValue) {
          this.node.setLabelWidget(newValue)
        }
        break
      case "labelXalign":
        if (this.node.labelXalign !== newValue) {
          this.node.labelXalign = newValue
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
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyLabelWidget":
        this.setHandler("notify::label-widget", newValue)
        break
      case "onNotifyLabelXalign":
        this.setHandler("notify::label-xalign", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
