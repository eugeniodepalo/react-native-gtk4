import AnyWidget from "../src/widget.js"
import Gtk from "@girs/node-gtk-4.0"

export function createWidget() {
  return new (class Widget extends AnyWidget {
    createNode() {
      return new Gtk.Widget()
    }
  })()
}
