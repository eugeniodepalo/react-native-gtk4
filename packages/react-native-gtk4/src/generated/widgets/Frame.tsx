import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Frame<T extends Gtk.Frame> extends Widget<T> {
  createNode() {
    return new Gtk.Frame({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "label":
        this.node.setLabel(newValue)
        break
      case "labelWidget":
        this.node.setLabelWidget(newValue)
        break
      case "labelXalign":
        this.node.labelXalign = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
