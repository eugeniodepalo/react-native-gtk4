import { Container, Gtk } from ".."
import Element from "../element"

export default class Label extends Element {
  createNode(container: Container) {
    return new Gtk.Label()
  }
  set(propName: string, newValue: any, oldValue: any) {
    switch (propName) {
      case "text":
        this.node.setText(newValue)
        break
      default:
        break
    }
  }
}
