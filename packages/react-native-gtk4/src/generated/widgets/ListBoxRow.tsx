import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ListBoxRow<T extends Gtk.ListBoxRow> extends Widget<T> {
  createNode() {
    return new Gtk.ListBoxRow({}) as T
  }
  appendChild(child: Widget<any>) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatable":
        this.node.setActivatable(newValue)
        break
      case "selectable":
        this.node.setSelectable(newValue)
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
      case "onNotifyActivatable":
        this.setHandler("notify::activatable", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifySelectable":
        this.setHandler("notify::selectable", newValue)
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
