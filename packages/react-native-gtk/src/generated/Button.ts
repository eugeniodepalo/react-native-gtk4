import { Container, Gtk } from ".."
import Element from "../element"

export default class Button extends Element {
  createNode(container: Container) {
    return new Gtk.Button()
  }
  set(propName: string, newValue: any, oldValue: any) {
    switch (propName) {
      case "label":
        this.node.setLabel(newValue)
        break
      case "onClicked":
        if (oldValue) {
          this.node.off("clicked", oldValue)
        }
        this.node.on("clicked", newValue)
        break
      default:
        break
    }
  }
}
