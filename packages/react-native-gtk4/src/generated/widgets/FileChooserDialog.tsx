import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class FileChooserDialog<
  T extends Gtk.FileChooserDialog = Gtk.FileChooserDialog,
> extends Dialog<T> {
  static createNode() {
    return new Gtk.FileChooserDialog({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
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
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyAction":
        this.setHandler("notify::action", newValue)
        break
      case "onNotifyCreateFolders":
        this.setHandler("notify::create-folders", newValue)
        break
      case "onNotifyFilter":
        this.setHandler("notify::filter", newValue)
        break
      case "onNotifyFilters":
        this.setHandler("notify::filters", newValue)
        break
      case "onNotifySelectMultiple":
        this.setHandler("notify::select-multiple", newValue)
        break
      case "onNotifyShortcutFolders":
        this.setHandler("notify::shortcut-folders", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
