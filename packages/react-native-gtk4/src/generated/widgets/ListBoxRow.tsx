import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ListBoxRow<T extends Gtk.ListBoxRow> extends Widget<T> {
  createNode() {
    return new Gtk.ListBoxRow() as T
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
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
    }
  }
}
