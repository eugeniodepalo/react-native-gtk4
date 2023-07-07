import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class WindowHandle extends Widget {
  createNode(container: Container) {
    return new Gtk.WindowHandle()
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
      default:
        break
    }
  }
}
