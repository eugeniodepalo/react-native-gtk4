import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class FontChooserWidget<
  T extends Gtk.FontChooserWidget = Gtk.FontChooserWidget,
> extends Widget<T> {
  createNode() {
    return new Gtk.FontChooserWidget({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "font":
        if (this.node.getFont() !== newValue) {
          this.node.setFont(newValue)
        }
        break
      case "fontDesc":
        if (this.node.getFontDesc() !== newValue) {
          this.node.setFontDesc(newValue)
        }
        break
      case "language":
        if (this.node.getLanguage() !== newValue) {
          this.node.setLanguage(newValue)
        }
        break
      case "level":
        if (this.node.getLevel() !== newValue) {
          this.node.setLevel(newValue)
        }
        break
      case "previewText":
        if (this.node.getPreviewText() !== newValue) {
          this.node.setPreviewText(newValue)
        }
        break
      case "showPreviewEntry":
        if (this.node.getShowPreviewEntry() !== newValue) {
          this.node.setShowPreviewEntry(newValue)
        }
        break
      case "onFontActivated":
        this.setHandler("font-activated", newValue)
        break
      case "onNotifyTweakAction":
        this.setHandler("notify::tweak-action", newValue)
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
      default:
        break
    }
  }
}
