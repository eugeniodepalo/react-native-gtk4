import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class AspectFrame<T extends Gtk.AspectFrame> extends Widget<T> {
  createNode() {
    return new Gtk.AspectFrame({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "obeyChild":
        this.node.setObeyChild(newValue)
        break
      case "ratio":
        this.node.setRatio(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
        break
      case "yalign":
        this.node.setYalign(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
