import { Container, Gtk } from ".."
import Widget from "../widget"

export default class FontButton extends Widget {
  createNode(container: Container) {
    return new Gtk.FontButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "modal":
        this.node.setModal(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "useFont":
        this.node.setUseFont(newValue)
        break
      case "useSize":
        this.node.setUseSize(newValue)
        break
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
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onFontSet":
        if (oldValue) {
          this.node.off("font-set", oldValue)
        }
        if (newValue) {
          this.node.on("font-set", newValue)
        }
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
