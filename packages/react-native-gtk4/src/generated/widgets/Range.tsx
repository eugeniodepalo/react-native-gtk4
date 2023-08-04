import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Range<T extends Gtk.Range = Gtk.Range> extends Widget<T> {
  static createNode() {
    return new Gtk.Range({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "adjustment":
        if (this.node.getAdjustment() !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "fillLevel":
        if (this.node.getFillLevel() !== newValue) {
          this.node.setFillLevel(newValue)
        }
        break
      case "inverted":
        if (this.node.getInverted() !== newValue) {
          this.node.setInverted(newValue)
        }
        break
      case "restrictToFillLevel":
        if (this.node.getRestrictToFillLevel() !== newValue) {
          this.node.setRestrictToFillLevel(newValue)
        }
        break
      case "roundDigits":
        if (this.node.getRoundDigits() !== newValue) {
          this.node.setRoundDigits(newValue)
        }
        break
      case "showFillLevel":
        if (this.node.getShowFillLevel() !== newValue) {
          this.node.setShowFillLevel(newValue)
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
      case "onAdjustBounds":
        this.setHandler("adjust-bounds", newValue)
        break
      case "onChangeValue":
        this.setHandler("change-value", newValue)
        break
      case "onMoveSlider":
        this.setHandler("move-slider", newValue)
        break
      case "onValueChanged":
        this.setHandler("value-changed", newValue)
        break
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyFillLevel":
        this.setHandler("notify::fill-level", newValue)
        break
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue)
        break
      case "onNotifyRestrictToFillLevel":
        this.setHandler("notify::restrict-to-fill-level", newValue)
        break
      case "onNotifyRoundDigits":
        this.setHandler("notify::round-digits", newValue)
        break
      case "onNotifyShowFillLevel":
        this.setHandler("notify::show-fill-level", newValue)
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
