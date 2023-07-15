import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FlowBoxChild<
  T extends Gtk.FlowBoxChild,
> extends Widget<T> {
  createNode() {
    return new Gtk.FlowBoxChild({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
    }
  }
}
