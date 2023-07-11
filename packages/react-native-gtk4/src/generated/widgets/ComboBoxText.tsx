import { Container, Gtk } from "../../index.js"
import ComboBox from "./ComboBox.js"

export default class ComboBoxText<
  T extends Gtk.ComboBoxText,
> extends ComboBox<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ComboBoxText() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "onEditingDone":
        if (oldValue) {
          this.node.off("editing-done", oldValue)
        }
        if (newValue) {
          this.node.on("editing-done", newValue)
        }
        break
      case "onRemoveWidget":
        if (oldValue) {
          this.node.off("remove-widget", oldValue)
        }
        if (newValue) {
          this.node.on("remove-widget", newValue)
        }
        break
    }
  }
}
