import Gtk from "@girs/node-gtk-4.0"
import Range from "./Range.js"

export default class Scale<T extends Gtk.Scale = Gtk.Scale> extends Range<T> {
  createNode() {
    return new Gtk.Scale({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "digits":
        if (this.node.getDigits() !== newValue) {
          this.node.setDigits(newValue)
        }
        break
      case "drawValue":
        if (this.node.getDrawValue() !== newValue) {
          this.node.setDrawValue(newValue)
        }
        break
      case "hasOrigin":
        if (this.node.getHasOrigin() !== newValue) {
          this.node.setHasOrigin(newValue)
        }
        break
      case "valuePos":
        if (this.node.getValuePos() !== newValue) {
          this.node.setValuePos(newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
