import { Container, Gtk } from "../../index.js"
import Dialog from "./Dialog.js"

export default class FileChooserDialog<
  T extends Gtk.FileChooserDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.FileChooserDialog({
      title: props.title,
      action: props.action,
    }) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "action":
        this.node.setAction(newValue)
        break
      case "createFolders":
        this.node.setCreateFolders(newValue)
        break
      case "filter":
        this.node.setFilter(newValue)
        break
      case "selectMultiple":
        this.node.setSelectMultiple(newValue)
        break
    }
  }
}
