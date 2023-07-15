import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutsShortcut<
  T extends Gtk.ShortcutsShortcut,
> extends Widget<T> {
  createNode() {
    return new Gtk.ShortcutsShortcut({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelSizeGroup":
        this.node.accelSizeGroup = newValue
        break
      case "accelerator":
        this.node.accelerator = newValue
        break
      case "actionName":
        this.node.actionName = newValue
        break
      case "direction":
        this.node.direction = newValue
        break
      case "icon":
        this.node.icon = newValue
        break
      case "iconSet":
        this.node.iconSet = newValue
        break
      case "shortcutType":
        this.node.shortcutType = newValue
        break
      case "subtitle":
        this.node.subtitle = newValue
        break
      case "subtitleSet":
        this.node.subtitleSet = newValue
        break
      case "title":
        this.node.title = newValue
        break
      case "titleSizeGroup":
        this.node.titleSizeGroup = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyAccelSizeGroup":
        this.setHandler("notify::accel-size-group", newValue)
        break
      case "onNotifyAccelerator":
        this.setHandler("notify::accelerator", newValue)
        break
      case "onNotifyActionName":
        this.setHandler("notify::action-name", newValue)
        break
      case "onNotifyDirection":
        this.setHandler("notify::direction", newValue)
        break
      case "onNotifyIcon":
        this.setHandler("notify::icon", newValue)
        break
      case "onNotifyIconSet":
        this.setHandler("notify::icon-set", newValue)
        break
      case "onNotifyShortcutType":
        this.setHandler("notify::shortcut-type", newValue)
        break
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue)
        break
      case "onNotifySubtitleSet":
        this.setHandler("notify::subtitle-set", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyTitleSizeGroup":
        this.setHandler("notify::title-size-group", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
