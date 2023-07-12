import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Fixed<T extends Gtk.Fixed> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Fixed() as T
  }
}
