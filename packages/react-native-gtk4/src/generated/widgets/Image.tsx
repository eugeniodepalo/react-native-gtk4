import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Image<T extends Gtk.Image = Gtk.Image> extends Widget<T> {
  static createNode() {
    return new Gtk.Image({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "file":
        this.node.file = newValue
        break
      case "gicon":
        this.node.gicon = newValue
        break
      case "iconName":
        this.node.iconName = newValue
        break
      case "iconSize":
        this.node.setIconSize(newValue)
        break
      case "paintable":
        this.node.paintable = newValue
        break
      case "pixelSize":
        this.node.setPixelSize(newValue)
        break
      case "resource":
        this.node.resource = newValue
        break
      case "useFallback":
        this.node.useFallback = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyFile":
        this.setHandler("notify::file", newValue)
        break
      case "onNotifyGicon":
        this.setHandler("notify::gicon", newValue)
        break
      case "onNotifyIconName":
        this.setHandler("notify::icon-name", newValue)
        break
      case "onNotifyIconSize":
        this.setHandler("notify::icon-size", newValue)
        break
      case "onNotifyPaintable":
        this.setHandler("notify::paintable", newValue)
        break
      case "onNotifyPixelSize":
        this.setHandler("notify::pixel-size", newValue)
        break
      case "onNotifyResource":
        this.setHandler("notify::resource", newValue)
        break
      case "onNotifyStorageType":
        this.setHandler("notify::storage-type", newValue)
        break
      case "onNotifyUseFallback":
        this.setHandler("notify::use-fallback", newValue)
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
