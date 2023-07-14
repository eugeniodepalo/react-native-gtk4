import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FlowBoxChild<
  T extends Gtk.FlowBoxChild,
> extends Widget<T> {
  createNode() {
    return new Gtk.FlowBoxChild() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
    }
  }
}
