import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class PrintUnixDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.PrintUnixDialog()
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
      case "printSettings":
        this.node.setPrintSettings(newValue)
        break
      case "selectedPrinter":
        this.node.setSelectedPrinter(newValue)
        break
      case "supportSelection":
        this.node.setSupportSelection(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
