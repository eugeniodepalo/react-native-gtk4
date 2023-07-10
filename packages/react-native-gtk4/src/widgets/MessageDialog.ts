import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class MessageDialog<
  T extends Gtk.MessageDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.MessageDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      default:
        break
    }
  }
}
