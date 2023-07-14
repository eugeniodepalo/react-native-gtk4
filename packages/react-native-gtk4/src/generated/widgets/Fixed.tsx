import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Fixed<T extends Gtk.Fixed> extends Widget<T> {
  createNode() {
    return new Gtk.Fixed() as T
  }
}
