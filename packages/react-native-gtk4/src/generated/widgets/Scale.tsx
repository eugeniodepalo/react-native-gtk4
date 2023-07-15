import { Gtk } from "../../index.js"
import Range from "./Range.js"

export default class Scale<T extends Gtk.Scale> extends Range<T> {
  createNode() {
    return new Gtk.Scale({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "digits":
        this.node.setDigits(newValue)
        break
      case "drawValue":
        this.node.setDrawValue(newValue)
        break
      case "hasOrigin":
        this.node.setHasOrigin(newValue)
        break
      case "valuePos":
        this.node.setValuePos(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
