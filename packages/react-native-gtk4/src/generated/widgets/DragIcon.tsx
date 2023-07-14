import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DragIcon<T extends Gtk.DragIcon> extends Widget<T> {
  createNode() {
    return new Gtk.DragIcon() as T
  }
}
