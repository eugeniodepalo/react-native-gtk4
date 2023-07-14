import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutLabel<
  T extends Gtk.ShortcutLabel,
> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.ShortcutLabel(props.accelerator) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelerator":
        this.node.setAccelerator(newValue)
        break
      case "disabledText":
        this.node.setDisabledText(newValue)
        break
    }
  }
}