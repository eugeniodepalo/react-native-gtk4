import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ScaleButton<
  T extends Gtk.ScaleButton = Gtk.ScaleButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ScaleButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "icons":
        this.node.setIcons(newValue)
        break
      case "value":
        this.node.setValue(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onPopdown":
        this.setHandler("popdown", newValue)
        break
      case "onPopup":
        this.setHandler("popup", newValue)
        break
      case "onValueChanged":
        this.setHandler("value-changed", newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyIcons":
        this.setHandler("notify::icons", newValue)
        break
      case "onNotifyValue":
        this.setHandler("notify::value", newValue)
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
