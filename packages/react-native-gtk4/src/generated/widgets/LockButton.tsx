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
        this.node.setPermission(newValue)
        break
      case "textLock":
        this.node.textLock = newValue
        break
      case "textUnlock":
        this.node.textUnlock = newValue
        break
      case "tooltipLock":
        this.node.tooltipLock = newValue
        break
      case "tooltipNotAuthorized":
        this.node.tooltipNotAuthorized = newValue
        break
      case "tooltipUnlock":
        this.node.tooltipUnlock = newValue
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
