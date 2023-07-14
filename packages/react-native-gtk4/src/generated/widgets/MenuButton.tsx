import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class MenuButton<T extends Gtk.MenuButton> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.MenuButton() as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    this.node.setChild(child.node)
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
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
    }
  }
}
