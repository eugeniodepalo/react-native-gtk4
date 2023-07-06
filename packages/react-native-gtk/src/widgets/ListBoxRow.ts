import { Container, Gtk } from ".."
import Widget from "../widget"

export default class ListBoxRow extends Widget {
  createNode(container: Container) {
    return new Gtk.ListBoxRow()
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
      case "activatable":
        this.node.setActivatable(newValue)
        break
      case "selectable":
        this.node.setSelectable(newValue)
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
      default:
        break
    }
  }
}
