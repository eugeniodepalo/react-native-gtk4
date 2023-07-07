import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ColorChooserWidget extends Widget {
  createNode(container: Container) {
    return new Gtk.ColorChooserWidget()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showEditor":
        this.node.setShowEditor(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "rgba":
        this.node.setRgba(newValue)
        break
      case "useAlpha":
        this.node.setUseAlpha(newValue)
        break
      case "onColorActivated":
        if (oldValue) {
          this.node.off("color-activated", oldValue)
        }
        if (newValue) {
          this.node.on("color-activated", newValue)
        }
        break
      default:
        break
    }
  }
}
