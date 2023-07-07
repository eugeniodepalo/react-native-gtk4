import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class DrawingArea extends Widget {
  createNode(container: Container) {
    return new Gtk.DrawingArea()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "contentHeight":
        this.node.setContentHeight(newValue)
        break
      case "contentWidth":
        this.node.setContentWidth(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onResize":
        if (oldValue) {
          this.node.off("resize", oldValue)
        }
        if (newValue) {
          this.node.on("resize", newValue)
        }
        break
      default:
        break
    }
  }
}
