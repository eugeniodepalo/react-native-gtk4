import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class Popover<
  T extends Gtk.Popover = Gtk.Popover,
> extends Widget<T> {
  static createNode() {
    return new Gtk.Popover({})
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
      case "autohide":
        this.node.setAutohide(newValue)
        break
      case "cascadePopdown":
        this.node.setCascadePopdown(newValue)
        break
      case "defaultWidget":
        this.node.setDefaultWidget(newValue)
        break
      case "hasArrow":
        this.node.setHasArrow(newValue)
        break
      case "mnemonicsVisible":
        this.node.setMnemonicsVisible(newValue)
        break
      case "pointingTo":
        this.node.setPointingTo(newValue)
        break
      case "position":
        this.node.setPosition(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivateDefault":
        this.setHandler("activate-default", newValue)
        break
      case "onClosed":
        this.setHandler("closed", newValue)
        break
      case "onNotifyAutohide":
        this.setHandler("notify::autohide", newValue)
        break
      case "onNotifyCascadePopdown":
        this.setHandler("notify::cascade-popdown", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyDefaultWidget":
        this.setHandler("notify::default-widget", newValue)
        break
      case "onNotifyHasArrow":
        this.setHandler("notify::has-arrow", newValue)
        break
      case "onNotifyMnemonicsVisible":
        this.setHandler("notify::mnemonics-visible", newValue)
        break
      case "onNotifyPointingTo":
        this.setHandler("notify::pointing-to", newValue)
        break
      case "onNotifyPosition":
        this.setHandler("notify::position", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
