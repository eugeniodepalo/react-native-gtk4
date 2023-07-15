import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ColorDialogButton<
  T extends Gtk.ColorDialogButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.ColorDialogButton({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "dialog":
        this.node.setDialog(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
