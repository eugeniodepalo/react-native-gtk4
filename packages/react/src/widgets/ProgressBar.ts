import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class ProgressBar extends Widget {
  createNode(container: Container) {
    return new Gtk.ProgressBar()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "ellipsize":
        this.node.setEllipsize(newValue)
        break
      case "fraction":
        this.node.setFraction(newValue)
        break
      case "inverted":
        this.node.setInverted(newValue)
        break
      case "pulseStep":
        this.node.setPulseStep(newValue)
        break
      case "showText":
        this.node.setShowText(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
