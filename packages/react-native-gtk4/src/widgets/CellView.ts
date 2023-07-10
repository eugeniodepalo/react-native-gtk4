import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class CellView<T extends Gtk.CellView> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.CellView() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "drawSensitive":
        this.node.setDrawSensitive(newValue)
        break
      case "fitModel":
        this.node.setFitModel(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
