import { Container, Gtk } from "../../index.js"
import Dialog from "./Dialog.js"

export default class PageSetupUnixDialog<
  T extends Gtk.PageSetupUnixDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.PageSetupUnixDialog(props.title, props.parent) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
    }
  }
}
