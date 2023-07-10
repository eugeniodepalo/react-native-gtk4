import { Container, Gtk } from "../index.js"
import Dialog from "./Dialog.js"

export default class FontChooserDialog<
  T extends Gtk.FontChooserDialog,
> extends Dialog<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.FontChooserDialog() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "font":
        this.node.setFont(newValue)
        break
      case "fontDesc":
        this.node.setFontDesc(newValue)
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
