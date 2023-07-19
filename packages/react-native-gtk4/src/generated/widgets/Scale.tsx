import { Gtk } from "../../index.js"
import Range from "./Range.js"

export default class Scale<T extends Gtk.Scale = Gtk.Scale> extends Range<T> {
  createNode() {
    return new Gtk.Scale({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "digits":
        if (this.node.digits !== newValue) {
          this.node.setDigits(newValue)
        }
        break
      case "drawValue":
        if (this.node.drawValue !== newValue) {
          this.node.setDrawValue(newValue)
        }
        break
      case "hasOrigin":
        if (this.node.hasOrigin !== newValue) {
          this.node.setHasOrigin(newValue)
        }
        break
      case "valuePos":
        if (this.node.valuePos !== newValue) {
          this.node.setValuePos(newValue)
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
      case "onNotifyDigits":
        this.setHandler("notify::digits", newValue)
        break
      case "onNotifyDrawValue":
        this.setHandler("notify::draw-value", newValue)
        break
      case "onNotifyHasOrigin":
        this.setHandler("notify::has-origin", newValue)
        break
      case "onNotifyValuePos":
        this.setHandler("notify::value-pos", newValue)
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
