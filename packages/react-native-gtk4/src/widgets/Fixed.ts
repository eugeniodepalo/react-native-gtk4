import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Fixed<T extends Gtk.Fixed> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Fixed() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      default:
        break
    }
  }
}
