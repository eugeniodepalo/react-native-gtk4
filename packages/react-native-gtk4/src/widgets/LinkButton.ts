import { Container, Gtk } from "../index.js"
import Button from "./Button.js"

export default class LinkButton extends Button {
  createNode(container: Container) {
    return new Gtk.LinkButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "uri":
        this.node.setUri(newValue)
        break
      case "visited":
        this.node.setVisited(newValue)
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
      case "onActivateLink":
        if (oldValue) {
          this.node.off("activate-link", oldValue)
        }
        if (newValue) {
          this.node.on("activate-link", newValue)
        }
        break
      default:
        break
    }
  }
}
