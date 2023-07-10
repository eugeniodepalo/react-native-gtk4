import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class PrintUnixDialog<
  T extends Gtk.PrintUnixDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.PrintUnixDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "currentPage":
        this.node.setCurrentPage(newValue)
        break
      case "embedPageSetup":
        this.node.setEmbedPageSetup(newValue)
        break
      case "hasSelection":
        this.node.setHasSelection(newValue)
        break
      case "manualCapabilities":
        this.node.setManualCapabilities(newValue)
        break
      case "pageSetup":
        this.node.setPageSetup(newValue)
        break
      case "supportSelection":
        this.node.setSupportSelection(newValue)
        break
      default:
        break
    }
  }
}
