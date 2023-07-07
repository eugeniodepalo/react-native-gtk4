import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Picture extends Widget {
  createNode(container: Container) {
    return new Gtk.Picture()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "alternativeText":
        this.node.setAlternativeText(newValue)
        break
      case "canShrink":
        this.node.setCanShrink(newValue)
        break
      case "contentFit":
        this.node.setContentFit(newValue)
        break
      case "file":
        this.node.setFile(newValue)
        break
      case "keepAspectRatio":
        this.node.setKeepAspectRatio(newValue)
        break
      case "paintable":
        this.node.setPaintable(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
