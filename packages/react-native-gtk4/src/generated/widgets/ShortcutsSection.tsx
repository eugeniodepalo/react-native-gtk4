import { Container, Gtk } from "../../index.js"
import Box from "./Box.js"

export default class ShortcutsSection<
  T extends Gtk.ShortcutsSection,
> extends Box<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ShortcutsSection() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onChangeCurrentPage":
        if (oldValue) {
          this.node.off("change-current-page", oldValue)
        }
        if (newValue) {
          this.node.on("change-current-page", newValue)
        }
        break
    }
  }
}
