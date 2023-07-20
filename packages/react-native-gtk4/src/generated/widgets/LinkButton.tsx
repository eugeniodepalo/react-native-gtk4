import { Gtk } from "../../index.js"
import Button from "./Button.js"

export default class LinkButton<
  T extends Gtk.LinkButton = Gtk.LinkButton,
> extends Button<T> {
  createNode() {
    return new Gtk.LinkButton({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "uri":
        if (this.node.getUri !== newValue) {
          this.node.setUri(newValue)
        }
        break
      case "visited":
        if (this.node.getVisited !== newValue) {
          this.node.setVisited(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "actionName":
        if (this.node.getActionName !== newValue) {
          this.node.setActionName(newValue)
        }
        break
      case "actionTarget":
        if (this.node.actionTarget !== newValue) {
          this.node.actionTarget = newValue
        }
        break
      case "onActivateLink":
        this.setHandler("activate-link", newValue)
        break
      case "onNotifyUri":
        this.setHandler("notify::uri", newValue)
        break
      case "onNotifyVisited":
        this.setHandler("notify::visited", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::action-name", newValue)
        break
      case "onNotifyActionTarget":
        this.setHandler("notify::action-target", newValue)
        break
    }
  }
}
