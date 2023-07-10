import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ListBoxRow<T extends Gtk.ListBoxRow> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ListBoxRow() as T
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
      case "activatable":
        this.node.setActivatable(newValue)
        break
      case "selectable":
        this.node.setSelectable(newValue)
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
      default:
        break
    }
  }
}
