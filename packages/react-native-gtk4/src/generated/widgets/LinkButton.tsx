import { Gtk } from "../../index.js"
import Button from "./Button.js"

export default class LinkButton<
  T extends Gtk.LinkButton = Gtk.LinkButton,
> extends Button<T> {
  createNode() {
    return new Gtk.LinkButton({}) as T
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
        this.node.accessibleRole = newValue
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
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
