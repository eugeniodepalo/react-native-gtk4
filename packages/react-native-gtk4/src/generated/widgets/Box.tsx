import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Box<T extends Gtk.Box = Gtk.Box> extends Widget<T> {
  createNode() {
    return new Gtk.Box({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselinePosition":
        if (this.node.baselinePosition !== newValue) {
          this.node.setBaselinePosition(newValue)
        }
        break
      case "homogeneous":
        if (this.node.homogeneous !== newValue) {
          this.node.setHomogeneous(newValue)
        }
        break
      case "spacing":
        if (this.node.spacing !== newValue) {
          this.node.setSpacing(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onNotifyBaselinePosition":
        this.setHandler("notify::baseline-position", newValue)
        break
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue)
        break
      case "onNotifySpacing":
        this.setHandler("notify::spacing", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
