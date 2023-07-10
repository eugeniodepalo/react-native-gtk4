import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class AppChooserDialog<
  T extends Gtk.AppChooserDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.AppChooserDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "heading":
        this.node.setHeading(newValue)
        break
      default:
        break
    }
  }
}
