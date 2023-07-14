import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class StackSidebar<
  T extends Gtk.StackSidebar,
> extends Widget<T> {
  createNode() {
    return new Gtk.StackSidebar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "stack":
        this.node.setStack(newValue)
        break
    }
  }
}
