import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class CheckButton<
  T extends Gtk.CheckButton = Gtk.CheckButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.CheckButton({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "active":
        if (this.node.getActive !== newValue) {
          this.node.setActive(newValue)
        }
        break
      case "group":
        if (this.node.group !== newValue) {
          this.node.setGroup(newValue)
        }
        break
      case "inconsistent":
        if (this.node.getInconsistent !== newValue) {
          this.node.setInconsistent(newValue)
        }
        break
      case "label":
        if (this.node.getLabel !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "useUnderline":
        if (this.node.getUseUnderline !== newValue) {
          this.node.setUseUnderline(newValue)
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
      case "onActivate":
        this.setHandler("activate", newValue)
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
      case "onNotifyInconsistent":
        this.setHandler("notify::inconsistent", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::use-underline", newValue)
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
