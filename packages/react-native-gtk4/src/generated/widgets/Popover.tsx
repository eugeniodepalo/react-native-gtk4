import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Popover<T extends Gtk.Popover> extends Widget<T> {
  createNode() {
    return new Gtk.Popover({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
    }
  }
}
