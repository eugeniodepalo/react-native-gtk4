import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Picture<
  T extends Gtk.Picture = Gtk.Picture,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Picture({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "alternativeText":
        if (this.node.getAlternativeText() !== newValue) {
          this.node.setAlternativeText(newValue)
        }
        break
      case "canShrink":
        if (this.node.getCanShrink() !== newValue) {
          this.node.setCanShrink(newValue)
        }
        break
      case "contentFit":
        if (this.node.getContentFit() !== newValue) {
          this.node.setContentFit(newValue)
        }
        break
      case "file":
        if (this.node.getFile() !== newValue) {
          this.node.setFile(newValue)
        }
        break
      case "keepAspectRatio":
        if (this.node.getKeepAspectRatio() !== newValue) {
          this.node.setKeepAspectRatio(newValue)
        }
        break
      case "paintable":
        if (this.node.getPaintable() !== newValue) {
          this.node.setPaintable(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyAlternativeText":
        this.setHandler("notify::alternative-text", newValue)
        break
      case "onNotifyCanShrink":
        this.setHandler("notify::can-shrink", newValue)
        break
      case "onNotifyContentFit":
        this.setHandler("notify::content-fit", newValue)
        break
      case "onNotifyFile":
        this.setHandler("notify::file", newValue)
        break
      case "onNotifyKeepAspectRatio":
        this.setHandler("notify::keep-aspect-ratio", newValue)
        break
      case "onNotifyPaintable":
        this.setHandler("notify::paintable", newValue)
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
