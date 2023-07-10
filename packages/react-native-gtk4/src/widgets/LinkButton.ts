import { Container, Gtk } from "../index.js"
import Button from "./Button.js"

export default class LinkButton<T extends Gtk.LinkButton> extends Button<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.LinkButton() as T
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
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
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
