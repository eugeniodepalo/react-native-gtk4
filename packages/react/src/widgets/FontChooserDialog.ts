import { Container, Gtk } from ".."
import Dialog from "./Dialog"

export default class FontChooserDialog extends Dialog {
  createNode(container: Container) {
    return new Gtk.FontChooserDialog()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "font":
        this.node.setFont(newValue)
        break
      case "fontDesc":
        this.node.setFontDesc(newValue)
        break
      case "fontFeatures":
        this.node.setFontFeatures(newValue)
        break
      case "language":
        this.node.setLanguage(newValue)
        break
      case "level":
        this.node.setLevel(newValue)
        break
      case "previewText":
        this.node.setPreviewText(newValue)
        break
      case "showPreviewEntry":
        this.node.setShowPreviewEntry(newValue)
        break
      case "onFontActivated":
        if (oldValue) {
          this.node.off("font-activated", oldValue)
        }
        if (newValue) {
          this.node.on("font-activated", newValue)
        }
        break
      default:
        break
    }
  }
}
