import { Container, Gtk } from ".."
import Element from "../element"

export default class Box extends Element {
  createNode(container: Container) {
    return new Gtk.Box()
  }
  set(propName: string, newValue: any, oldValue: any) {
    switch (propName) {
      default:
        break
    }
  }
}
