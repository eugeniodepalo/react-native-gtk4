import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Box<T extends Gtk.Box = Gtk.Box> extends Widget<T> {
  createNode() {
    return new Gtk.Box({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "baselinePosition":
        if (this.node.getBaselinePosition() !== newValue) {
          this.node.setBaselinePosition(newValue)
        }
        break
      case "homogeneous":
        if (this.node.getHomogeneous() !== newValue) {
          this.node.setHomogeneous(newValue)
        }
        break
      case "spacing":
        if (this.node.getSpacing() !== newValue) {
          this.node.setSpacing(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
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
      default:
        break
    }
  }
}
