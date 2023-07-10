import { Container, Gtk } from "../index.js"
import Button from "./Button.js"

export default class LockButton<T extends Gtk.LockButton> extends Button<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.LockButton() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "permission":
        this.node.setPermission(newValue)
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      default:
        break
    }
  }
}
