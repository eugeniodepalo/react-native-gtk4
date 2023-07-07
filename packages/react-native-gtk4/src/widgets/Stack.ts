import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Stack extends Widget {
  createNode(container: Container) {
    return new Gtk.Stack()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hhomogeneous":
        this.node.setHhomogeneous(newValue)
        break
      case "interpolateSize":
        this.node.setInterpolateSize(newValue)
        break
      case "pages":
        this.node.setPages(newValue)
        break
      case "transitionDuration":
        this.node.setTransitionDuration(newValue)
        break
      case "transitionRunning":
        this.node.setTransitionRunning(newValue)
        break
      case "transitionType":
        this.node.setTransitionType(newValue)
        break
      case "vhomogeneous":
        this.node.setVhomogeneous(newValue)
        break
      case "visibleChild":
        this.node.setVisibleChild(newValue)
        break
      case "visibleChildName":
        this.node.setVisibleChildName(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
