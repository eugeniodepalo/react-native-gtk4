import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Range<T extends Gtk.Range = Gtk.Range> extends Widget<T> {
  createNode() {
    return new Gtk.Range({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        if (this.node.adjustment !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "fillLevel":
        if (this.node.fillLevel !== newValue) {
          this.node.setFillLevel(newValue)
        }
        break
      case "inverted":
        if (this.node.inverted !== newValue) {
          this.node.setInverted(newValue)
        }
        break
      case "restrictToFillLevel":
        if (this.node.restrictToFillLevel !== newValue) {
          this.node.setRestrictToFillLevel(newValue)
        }
        break
      case "roundDigits":
        if (this.node.roundDigits !== newValue) {
          this.node.setRoundDigits(newValue)
        }
        break
      case "showFillLevel":
        if (this.node.showFillLevel !== newValue) {
          this.node.setShowFillLevel(newValue)
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
    }
  }
}
