import { Container, Gtk } from "../index.js"
import ScaleButton from "./ScaleButton.js"

export default class VolumeButton extends ScaleButton {
  createNode(container: Container) {
    return new Gtk.VolumeButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "useSymbolic":
        this.node.setUseSymbolic(newValue)
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
