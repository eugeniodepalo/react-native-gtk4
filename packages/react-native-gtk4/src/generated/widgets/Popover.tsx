import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Popover<
  T extends Gtk.Popover = Gtk.Popover,
> extends Widget<T> {
  createNode() {
    return new Gtk.Popover({}) as T
  }
  appendChild(child: Widget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget, beforeChild: Widget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "autohide":
        if (this.node.autohide !== newValue) {
          this.node.setAutohide(newValue)
        }
        break
      case "cascadePopdown":
        if (this.node.cascadePopdown !== newValue) {
          this.node.setCascadePopdown(newValue)
        }
        break
      case "defaultWidget":
        if (this.node.defaultWidget !== newValue) {
          this.node.setDefaultWidget(newValue)
        }
        break
      case "hasArrow":
        if (this.node.hasArrow !== newValue) {
          this.node.setHasArrow(newValue)
        }
        break
      case "mnemonicsVisible":
        if (this.node.mnemonicsVisible !== newValue) {
          this.node.setMnemonicsVisible(newValue)
        }
        break
      case "pointingTo":
        if (this.node.pointingTo !== newValue) {
          this.node.setPointingTo(newValue)
        }
        break
      case "position":
        if (this.node.position !== newValue) {
          this.node.setPosition(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
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
    }
  }
}
