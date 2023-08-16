import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Box<T extends Gtk.Box = Gtk.Box> extends Widget<T> {
  static createNode() {
    return new Gtk.Box({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "baselinePosition":
        this.node.setBaselinePosition(newValue)
        break
      case "homogeneous":
        this.node.setHomogeneous(newValue)
        break
      case "spacing":
        this.node.setSpacing(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
