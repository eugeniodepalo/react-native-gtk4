import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Image<T extends Gtk.Image> extends Widget<T> {
  createNode() {
    return new Gtk.Image({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
    }
  }
}
