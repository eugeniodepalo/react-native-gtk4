import AbstractWidget from "../widget.js"
import Gtk from "@girs/node-gtk-4.0"

export function createMockWidget() {
  return new (class extends AbstractWidget {
    set() {}
    commitMount() {}
  })(new Gtk.Widget())
}
