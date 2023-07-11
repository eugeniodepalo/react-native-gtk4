import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutsShortcut<
  T extends Gtk.ShortcutsShortcut,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ShortcutsShortcut() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
    }
  }
}
