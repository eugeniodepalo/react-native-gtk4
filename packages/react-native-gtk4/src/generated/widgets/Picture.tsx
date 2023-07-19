import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Picture<
  T extends Gtk.Picture = Gtk.Picture,
> extends Widget<T> {
  createNode() {
    return new Gtk.Picture({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "alternativeText":
        if (this.node.alternativeText !== newValue) {
          this.node.setAlternativeText(newValue)
        }
        break
      case "canShrink":
        if (this.node.canShrink !== newValue) {
          this.node.setCanShrink(newValue)
        }
        break
      case "contentFit":
        if (this.node.contentFit !== newValue) {
          this.node.setContentFit(newValue)
        }
        break
      case "file":
        if (this.node.file !== newValue) {
          this.node.setFile(newValue)
        }
        break
      case "keepAspectRatio":
        if (this.node.keepAspectRatio !== newValue) {
          this.node.setKeepAspectRatio(newValue)
        }
        break
      case "paintable":
        if (this.node.paintable !== newValue) {
          this.node.setPaintable(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
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
    }
  }
}
