import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Scrollbar<T extends Gtk.Scrollbar> extends Widget<T> {
  createNode() {
    return new Gtk.Scrollbar(this.props.orientation, this.props.adjustment) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
