import { Container, Gtk } from ".."
import Widget from "../widget"

export default class Grid extends Widget {
  createNode(container: Container) {
    return new Gtk.Grid()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselineRow":
        this.node.setBaselineRow(newValue)
        break
      case "columnHomogeneous":
        this.node.setColumnHomogeneous(newValue)
        break
      case "columnSpacing":
        this.node.setColumnSpacing(newValue)
        break
      case "rowHomogeneous":
        this.node.setRowHomogeneous(newValue)
        break
      case "rowSpacing":
        this.node.setRowSpacing(newValue)
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
