import Gtk from "@girs/node-gtk-4.0"
import Button from "./Button.js"

export default class LockButton<
  T extends Gtk.LockButton = Gtk.LockButton,
> extends Button<T> {
  static createNode() {
    return new Gtk.LockButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "permission":
        if (this.node.getPermission() !== newValue) {
          this.node.setPermission(newValue)
        }
        break
      case "textLock":
        if (this.node.textLock !== newValue) {
          this.node.textLock = newValue
        }
        break
      case "textUnlock":
        if (this.node.textUnlock !== newValue) {
          this.node.textUnlock = newValue
        }
        break
      case "tooltipLock":
        if (this.node.tooltipLock !== newValue) {
          this.node.tooltipLock = newValue
        }
        break
      case "tooltipNotAuthorized":
        if (this.node.tooltipNotAuthorized !== newValue) {
          this.node.tooltipNotAuthorized = newValue
        }
        break
      case "tooltipUnlock":
        if (this.node.tooltipUnlock !== newValue) {
          this.node.tooltipUnlock = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "actionName":
        if (this.node.getActionName() !== newValue) {
          this.node.setActionName(newValue)
        }
        break
      case "actionTarget":
        if (this.node.actionTarget !== newValue) {
          this.node.actionTarget = newValue
        }
        break
      case "onNotifyPermission":
        this.setHandler("notify::permission", newValue)
        break
      case "onNotifyTextLock":
        this.setHandler("notify::text-lock", newValue)
        break
      case "onNotifyTextUnlock":
        this.setHandler("notify::text-unlock", newValue)
        break
      case "onNotifyTooltipLock":
        this.setHandler("notify::tooltip-lock", newValue)
        break
      case "onNotifyTooltipNotAuthorized":
        this.setHandler("notify::tooltip-not-authorized", newValue)
        break
      case "onNotifyTooltipUnlock":
        this.setHandler("notify::tooltip-unlock", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::action-name", newValue)
        break
      case "onNotifyActionTarget":
        this.setHandler("notify::action-target", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
