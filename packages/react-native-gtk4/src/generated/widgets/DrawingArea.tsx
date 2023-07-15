import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DrawingArea<T extends Gtk.DrawingArea> extends Widget<T> {
  createNode() {
    return new Gtk.DrawingArea({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "contentHeight":
        this.node.setContentHeight(newValue)
        break
      case "contentWidth":
        this.node.setContentWidth(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onResize":
        this.setHandler("resize", newValue)
        break
    }
  }
}
