import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Popover extends Widget {
  createNode(container: Container) {
    return new Gtk.Popover()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
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
        this.node.setAccessibleRole(newValue)
        break
      case "onActivateDefault":
        if (oldValue) {
          this.node.off("activate-default", oldValue)
        }
        if (newValue) {
          this.node.on("activate-default", newValue)
        }
        break
      case "onClosed":
        if (oldValue) {
          this.node.off("closed", oldValue)
        }
        if (newValue) {
          this.node.on("closed", newValue)
        }
        break
      default:
        break
    }
  }
}
