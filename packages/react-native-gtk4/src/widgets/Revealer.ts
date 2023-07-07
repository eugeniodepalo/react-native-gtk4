import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Revealer extends Widget {
  createNode(container: Container) {
    return new Gtk.Revealer()
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
      case "childRevealed":
        this.node.setChildRevealed(newValue)
        break
      case "revealChild":
        this.node.setRevealChild(newValue)
        break
      case "transitionDuration":
        this.node.setTransitionDuration(newValue)
        break
      case "transitionType":
        this.node.setTransitionType(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
