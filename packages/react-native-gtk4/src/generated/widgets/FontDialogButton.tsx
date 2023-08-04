import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class FontDialogButton<
  T extends Gtk.FontDialogButton = Gtk.FontDialogButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.FontDialogButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "dialog":
        if (this.node.getDialog() !== newValue) {
          this.node.setDialog(newValue)
        }
        break
      case "fontDesc":
        if (this.node.getFontDesc() !== newValue) {
          this.node.setFontDesc(newValue)
        }
        break
      case "fontFeatures":
        if (this.node.getFontFeatures() !== newValue) {
          this.node.setFontFeatures(newValue)
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
      case "useFont":
        if (this.node.getUseFont() !== newValue) {
          this.node.setUseFont(newValue)
        }
        break
      case "useSize":
        if (this.node.getUseSize() !== newValue) {
          this.node.setUseSize(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyDialog":
        this.setHandler("notify::dialog", newValue)
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
      case "onNotifyUseFont":
        this.setHandler("notify::use-font", newValue)
        break
      case "onNotifyUseSize":
        this.setHandler("notify::use-size", newValue)
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
