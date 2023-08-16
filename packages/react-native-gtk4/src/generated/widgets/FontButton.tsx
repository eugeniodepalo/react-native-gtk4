import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class FontButton<
  T extends Gtk.FontButton = Gtk.FontButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.FontButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
        this.node.accessibleRole = newValue
        break
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
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onFontSet":
        this.setHandler("font-set", newValue)
        break
      case "onFontActivated":
        this.setHandler("font-activated", newValue)
        break
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyUseFont":
        this.setHandler("notify::use-font", newValue)
        break
      case "onNotifyUseSize":
        this.setHandler("notify::use-size", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyFont":
        this.setHandler("notify::font", newValue)
        break
      case "onNotifyFontDesc":
        this.setHandler("notify::font-desc", newValue)
        break
      case "onNotifyFontFeatures":
        this.setHandler("notify::font-features", newValue)
        break
      case "onNotifyLanguage":
        this.setHandler("notify::language", newValue)
        break
      case "onNotifyLevel":
        this.setHandler("notify::level", newValue)
        break
      case "onNotifyPreviewText":
        this.setHandler("notify::preview-text", newValue)
        break
      case "onNotifyShowPreviewEntry":
        this.setHandler("notify::show-preview-entry", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
