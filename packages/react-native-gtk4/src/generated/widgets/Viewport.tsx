import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Viewport<T extends Gtk.Viewport> extends Widget<T> {
  createNode() {
    return new Gtk.Viewport(this.props.hadjustment, this.props.vadjustment) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "scrollToFocus":
        this.node.setScrollToFocus(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
        break
    }
  }
}
