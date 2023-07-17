import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Switch<
  T extends Gtk.Switch = Gtk.Switch,
> extends Widget<T> {
  createNode() {
    return new Gtk.Switch({}) as T
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
        this.node.accessibleRole = newValue
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onStateSet":
        this.setHandler("state-set", newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyState":
        this.setHandler("notify::state", newValue)
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
