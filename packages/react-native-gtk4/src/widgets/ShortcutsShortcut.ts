import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ShortcutsShortcut extends Widget {
  createNode(container: Container) {
    return new Gtk.ShortcutsShortcut()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accelSizeGroup":
        this.node.setAccelSizeGroup(newValue)
        break
      case "accelerator":
        this.node.setAccelerator(newValue)
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "direction":
        this.node.setDirection(newValue)
        break
      case "icon":
        this.node.setIcon(newValue)
        break
      case "iconSet":
        this.node.setIconSet(newValue)
        break
      case "shortcutType":
        this.node.setShortcutType(newValue)
        break
      case "subtitle":
        this.node.setSubtitle(newValue)
        break
      case "subtitleSet":
        this.node.setSubtitleSet(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "titleSizeGroup":
        this.node.setTitleSizeGroup(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
