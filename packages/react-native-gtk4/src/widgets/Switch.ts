import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Switch extends Widget {
  createNode(container: Container) {
    return new Gtk.Switch()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "state":
        this.node.setState(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTarget(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onStateSet":
        if (oldValue) {
          this.node.off("state-set", oldValue)
        }
        if (newValue) {
          this.node.on("state-set", newValue)
        }
        break
      default:
        break
    }
  }
}
