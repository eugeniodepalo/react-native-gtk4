import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutsShortcut<
  T extends Gtk.ShortcutsShortcut,
> extends Widget<T> {
  createNode() {
    return new Gtk.ShortcutsShortcut() as T
  }
}
