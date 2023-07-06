import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class WindowControls extends Widget {
  createNode(container: Container) {
    return new Gtk.WindowControls()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "decorationLayout":
        this.node.setDecorationLayout(newValue)
        break
      case "empty":
        this.node.setEmpty(newValue)
        break
      case "side":
        this.node.setSide(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
