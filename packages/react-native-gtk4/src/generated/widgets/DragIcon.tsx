import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DragIcon<T extends Gtk.DragIcon> extends Widget<T> {
  createNode() {
    return new Gtk.DragIcon() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
