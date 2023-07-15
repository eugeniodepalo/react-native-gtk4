import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Range<T extends Gtk.Range> extends Widget<T> {
  createNode() {
    return new Gtk.Range({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "fillLevel":
        this.node.setFillLevel(newValue)
        break
      case "inverted":
        this.node.setInverted(newValue)
        break
      case "restrictToFillLevel":
        this.node.setRestrictToFillLevel(newValue)
        break
      case "roundDigits":
        this.node.setRoundDigits(newValue)
        break
      case "showFillLevel":
        this.node.setShowFillLevel(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
    }
  }
}
