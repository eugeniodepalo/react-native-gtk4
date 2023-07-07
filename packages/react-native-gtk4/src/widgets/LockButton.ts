import { Container, Gtk } from "../index.js"
import Button from "./Button.js"

export default class LockButton extends Button {
  createNode(container: Container) {
    return new Gtk.LockButton()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "permission":
        this.node.setPermission(newValue)
        break
      case "textLock":
        this.node.setTextLock(newValue)
        break
      case "textUnlock":
        this.node.setTextUnlock(newValue)
        break
      case "tooltipLock":
        this.node.setTooltipLock(newValue)
        break
      case "tooltipNotAuthorized":
        this.node.setTooltipNotAuthorized(newValue)
        break
      case "tooltipUnlock":
        this.node.setTooltipUnlock(newValue)
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
      default:
        break
    }
  }
}
