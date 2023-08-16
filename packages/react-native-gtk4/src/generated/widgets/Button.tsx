import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class Button<
  T extends Gtk.Button = Gtk.Button,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Button({})
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
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
      case "onClicked":
        this.setHandler("clicked", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyIconName":
        this.setHandler("notify::icon-name", newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
