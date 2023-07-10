import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Grid<T extends Gtk.Grid> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Grid() as T
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
