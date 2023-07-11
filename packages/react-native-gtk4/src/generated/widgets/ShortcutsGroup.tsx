import { Container, Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsGroup<
  T extends Gtk.ShortcutsGroup,
> extends Box<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ShortcutsGroup() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
