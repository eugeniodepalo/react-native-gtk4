import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Switch<T extends Gtk.Switch> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Switch() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "state":
        this.node.setState(newValue)
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
      case "onStateSet":
        if (oldValue) {
          this.node.off("state-set", oldValue)
        }
        if (newValue) {
          this.node.on("state-set", newValue)
        }
        break
    }
  }
}
