import { Gtk } from "../../index.js"
import Button from "./Button.js"

export default class ToggleButton<
  T extends Gtk.ToggleButton,
> extends Button<T> {
  createNode() {
    return new Gtk.ToggleButton() as T
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
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      case "onToggled":
        if (oldValue) {
          this.node.off("toggled", oldValue)
        }
        if (newValue) {
          this.node.on("toggled", newValue)
        }
        break
    }
  }
}
