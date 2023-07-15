import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ShortcutsShortcut<
  T extends Gtk.ShortcutsShortcut,
> extends Widget<T> {
  createNode() {
    return new Gtk.ShortcutsShortcut() as T
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
    }
  }
}
