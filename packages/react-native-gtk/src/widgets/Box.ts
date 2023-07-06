import { Container, Gtk } from ".."
import Widget from "../widget"

export default class Box extends Widget {
  createNode(container: Container) {
    return new Gtk.Box()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselineChild":
        this.node.setBaselineChild(newValue)
        break
      case "baselinePosition":
        this.node.setBaselinePosition(newValue)
        break
      case "homogeneous":
        this.node.setHomogeneous(newValue)
        break
      case "spacing":
        this.node.setSpacing(newValue)
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
