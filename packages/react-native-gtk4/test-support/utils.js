import AnyWidget from "../src/widget.js"
import Gtk from "@girs/node-gtk-4.0"

export function createAnyWidget() {
  return new (class Widget extends AnyWidget {
    node = this.createNode()

    createNode() {
      return new Gtk.Widget()
    }
  })()
}
