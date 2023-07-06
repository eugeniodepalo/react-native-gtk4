import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class Image extends Widget {
  createNode(container: Container) {
    return new Gtk.Image()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "file":
        this.node.setFile(newValue)
        break
      case "gicon":
        this.node.setGicon(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
        break
      case "iconSize":
        this.node.setIconSize(newValue)
        break
      case "paintable":
        this.node.setPaintable(newValue)
        break
      case "pixelSize":
        this.node.setPixelSize(newValue)
        break
      case "resource":
        this.node.setResource(newValue)
        break
      case "storageType":
        this.node.setStorageType(newValue)
        break
      case "useFallback":
        this.node.setUseFallback(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
