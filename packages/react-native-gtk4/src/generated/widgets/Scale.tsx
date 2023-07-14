import { Gtk } from "../../index.js"
import Range from "./Range.js"

export default class Scale<T extends Gtk.Scale> extends Range<T> {
  createNode() {
    return new Gtk.Scale(this.props.orientation, this.props.adjustment) as T
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
