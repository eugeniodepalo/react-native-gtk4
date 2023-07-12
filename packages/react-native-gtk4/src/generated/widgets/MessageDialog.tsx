import { Container, Gtk } from "../../index.js"
import Dialog from "./Dialog.js"

export default class MessageDialog<
  T extends Gtk.MessageDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.MessageDialog({
      buttons: props.buttons,
    }) as T
  }
}
