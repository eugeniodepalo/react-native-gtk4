import Gtk from "@girs/node-gtk-4.0"
import Button from "./Button.js"

export default class ToggleButton<
  T extends Gtk.ToggleButton = Gtk.ToggleButton,
> extends Button<T> {
  static createNode() {
    return new Gtk.ToggleButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "active":
        if (this.node.active !== newValue) {
          this.node.setActive(newValue)
        }
        break
      case "group":
        this.node.setGroup(newValue)
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "actionName":
        if (this.node.getActionName() !== newValue) {
          this.node.setActionName(newValue)
        }
        break
      case "actionTarget":
        if (this.node.actionTarget !== newValue) {
          this.node.actionTarget = newValue
        }
        break
      case "onToggled":
        this.setHandler("toggled", newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyGroup":
        this.setHandler("notify::group", newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
