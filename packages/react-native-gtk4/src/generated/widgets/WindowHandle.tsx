import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class WindowHandle<
  T extends Gtk.WindowHandle,
> extends Widget<T> {
  createNode() {
    return new Gtk.WindowHandle({}) as T
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
