import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class FileChooserDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.FileChooserDialog()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
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
      case "filters":
        this.node.setFilters(newValue)
        break
      case "selectMultiple":
        this.node.setSelectMultiple(newValue)
        break
      case "shortcutFolders":
        this.node.setShortcutFolders(newValue)
        break
      default:
        break
    }
  }
}
