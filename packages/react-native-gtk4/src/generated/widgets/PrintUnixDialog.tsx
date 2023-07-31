import Gtk from "@girs/node-gtk-4.0"
import Dialog from "./Dialog.js"

export default class PrintUnixDialog<
  T extends Gtk.PrintUnixDialog = Gtk.PrintUnixDialog,
> extends Dialog<T> {
  createNode() {
    return new Gtk.PrintUnixDialog({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "currentPage":
        if (this.node.getCurrentPage() !== newValue) {
          this.node.setCurrentPage(newValue)
        }
        break
      case "embedPageSetup":
        if (this.node.getEmbedPageSetup() !== newValue) {
          this.node.setEmbedPageSetup(newValue)
        }
        break
      case "hasSelection":
        if (this.node.getHasSelection() !== newValue) {
          this.node.setHasSelection(newValue)
        }
        break
      case "manualCapabilities":
        if (this.node.getManualCapabilities() !== newValue) {
          this.node.setManualCapabilities(newValue)
        }
        break
      case "pageSetup":
        if (this.node.getPageSetup() !== newValue) {
          this.node.setPageSetup(newValue)
        }
        break
      case "printSettings":
        this.node.printSettings = newValue
        break
      case "supportSelection":
        if (this.node.getSupportSelection() !== newValue) {
          this.node.setSupportSelection(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyCurrentPage":
        this.setHandler("notify::current-page", newValue)
        break
      case "onNotifyEmbedPageSetup":
        this.setHandler("notify::embed-page-setup", newValue)
        break
      case "onNotifyHasSelection":
        this.setHandler("notify::has-selection", newValue)
        break
      case "onNotifyManualCapabilities":
        this.setHandler("notify::manual-capabilities", newValue)
        break
      case "onNotifyPageSetup":
        this.setHandler("notify::page-setup", newValue)
        break
      case "onNotifyPrintSettings":
        this.setHandler("notify::print-settings", newValue)
        break
      case "onNotifySelectedPrinter":
        this.setHandler("notify::selected-printer", newValue)
        break
      case "onNotifySupportSelection":
        this.setHandler("notify::support-selection", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
