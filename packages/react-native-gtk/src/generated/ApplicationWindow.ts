import { Container, Gtk } from ".."
import Element from "../element"
export default class ApplicationWindow extends Element {
  createNode(container: Container) {
    return new Gtk.ApplicationWindow()
  }
  set(propName: string, newValue: any, oldValue: any) {
    switch (propName) {
      case "title":
        this.node.setTitle(newValue)
      default:
        break
    }
  }
}
