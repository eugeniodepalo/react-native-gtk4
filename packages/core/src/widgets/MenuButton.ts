import { Container, Gtk } from ".."
import Widget from "../widget"

export default class MenuButton extends Widget {
  createNode(container: Container) {
    return new Gtk.MenuButton()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "alwaysShowArrow":
        this.node.setAlwaysShowArrow(newValue)
        break
      case "canShrink":
        this.node.setCanShrink(newValue)
        break
      case "direction":
        this.node.setDirection(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
      case "popover":
        this.node.setPopover(newValue)
        break
      case "primary":
        this.node.setPrimary(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      default:
        break
    }
  }
}
