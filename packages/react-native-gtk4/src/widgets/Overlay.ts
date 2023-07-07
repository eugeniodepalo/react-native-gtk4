import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Overlay extends Widget {
  createNode(container: Container) {
    return new Gtk.Overlay()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onGetChildPosition":
        if (oldValue) {
          this.node.off("get-child-position", oldValue)
        }
        if (newValue) {
          this.node.on("get-child-position", newValue)
        }
        break
      default:
        break
    }
  }
}
