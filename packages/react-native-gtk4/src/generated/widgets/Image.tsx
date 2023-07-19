import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Image<T extends Gtk.Image = Gtk.Image> extends Widget<T> {
  createNode() {
    return new Gtk.Image({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "file":
        if (this.node.file !== newValue) {
          this.node.file = newValue
        }
        break
      case "gicon":
        if (this.node.gicon !== newValue) {
          this.node.gicon = newValue
        }
        break
      case "iconName":
        if (this.node.iconName !== newValue) {
          this.node.iconName = newValue
        }
        break
      case "iconSize":
        if (this.node.iconSize !== newValue) {
          this.node.setIconSize(newValue)
        }
        break
      case "paintable":
        if (this.node.paintable !== newValue) {
          this.node.paintable = newValue
        }
        break
      case "pixelSize":
        if (this.node.pixelSize !== newValue) {
          this.node.setPixelSize(newValue)
        }
        break
      case "resource":
        if (this.node.resource !== newValue) {
          this.node.resource = newValue
        }
        break
      case "useFallback":
        if (this.node.useFallback !== newValue) {
          this.node.useFallback = newValue
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
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
    }
  }
}
