import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class CheckButton<T extends Gtk.CheckButton> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.CheckButton() as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "group":
        this.node.setGroup(newValue)
        break
      case "inconsistent":
        this.node.setInconsistent(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onToggled":
        if (oldValue) {
          this.node.off("toggled", oldValue)
        }
        if (newValue) {
          this.node.on("toggled", newValue)
        }
        break
      default:
        break
    }
  }
}
