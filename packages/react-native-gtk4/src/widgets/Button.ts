import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Button extends Widget {
  createNode(container: Container) {
    return new Gtk.Button()
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
        this.node.setAccessibleRole(newValue)
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTarget(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onClicked":
        if (oldValue) {
          this.node.off("clicked", oldValue)
        }
        if (newValue) {
          this.node.on("clicked", newValue)
        }
        break
      default:
        break
    }
  }
}
