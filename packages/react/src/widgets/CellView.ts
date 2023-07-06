import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class CellView extends Widget {
  createNode(container: Container) {
    return new Gtk.CellView()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "cellArea":
        this.node.setCellArea(newValue)
        break
      case "cellAreaContext":
        this.node.setCellAreaContext(newValue)
        break
      case "drawSensitive":
        this.node.setDrawSensitive(newValue)
        break
      case "fitModel":
        this.node.setFitModel(newValue)
        break
      case "model":
        this.node.setModel(newValue)
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
