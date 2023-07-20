import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class MenuButton<
  T extends Gtk.MenuButton = Gtk.MenuButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.MenuButton({}) as T
  }
  appendChild(child: Widget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget, beforeChild: Widget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "active":
        if (this.node.getActive !== newValue) {
          this.node.setActive(newValue)
        }
        break
      case "alwaysShowArrow":
        if (this.node.getAlwaysShowArrow !== newValue) {
          this.node.setAlwaysShowArrow(newValue)
        }
        break
      case "direction":
        if (this.node.getDirection !== newValue) {
          this.node.setDirection(newValue)
        }
        break
      case "hasFrame":
        if (this.node.getHasFrame !== newValue) {
          this.node.setHasFrame(newValue)
        }
        break
      case "iconName":
        if (this.node.getIconName !== newValue) {
          this.node.setIconName(newValue)
        }
        break
      case "label":
        if (this.node.getLabel !== newValue) {
          this.node.setLabel(newValue)
        }
        break
      case "menuModel":
        if (this.node.getMenuModel !== newValue) {
          this.node.setMenuModel(newValue)
        }
        break
      case "popover":
        if (this.node.getPopover !== newValue) {
          this.node.setPopover(newValue)
        }
        break
      case "primary":
        if (this.node.getPrimary !== newValue) {
          this.node.setPrimary(newValue)
        }
        break
      case "useUnderline":
        if (this.node.getUseUnderline !== newValue) {
          this.node.setUseUnderline(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyAlwaysShowArrow":
        this.setHandler("notify::always-show-arrow", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyDirection":
        this.setHandler("notify::direction", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyIconName":
        this.setHandler("notify::icon-name", newValue)
        break
      case "onNotifyLabel":
        this.setHandler("notify::label", newValue)
        break
      case "onNotifyMenuModel":
        this.setHandler("notify::menu-model", newValue)
        break
      case "onNotifyPopover":
        this.setHandler("notify::popover", newValue)
        break
      case "onNotifyPrimary":
        this.setHandler("notify::primary", newValue)
        break
      case "onNotifyUseUnderline":
        this.setHandler("notify::use-underline", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
