import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Range<T extends Gtk.Range> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Range() as T
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onAdjustBounds":
        if (oldValue) {
          this.node.off("adjust-bounds", oldValue)
        }
        if (newValue) {
          this.node.on("adjust-bounds", newValue)
        }
        break
      case "onChangeValue":
        if (oldValue) {
          this.node.off("change-value", oldValue)
        }
        if (newValue) {
          this.node.on("change-value", newValue)
        }
        break
      case "onMoveSlider":
        if (oldValue) {
          this.node.off("move-slider", oldValue)
        }
        if (newValue) {
          this.node.on("move-slider", newValue)
        }
        break
      case "onValueChanged":
        if (oldValue) {
          this.node.off("value-changed", oldValue)
        }
        if (newValue) {
          this.node.on("value-changed", newValue)
        }
        break
    }
  }
}
