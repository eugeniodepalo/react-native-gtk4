import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../abstract/widget.js"

export default class SearchBar<
  T extends Gtk.SearchBar = Gtk.SearchBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.SearchBar({}) as T
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "keyCaptureWidget":
        if (this.node.getKeyCaptureWidget() !== newValue) {
          this.node.setKeyCaptureWidget(newValue)
        }
        break
      case "searchModeEnabled":
        if (this.node.searchModeEnabled !== newValue) {
          this.node.searchModeEnabled = newValue
        }
        break
      case "showCloseButton":
        if (this.node.getShowCloseButton() !== newValue) {
          this.node.setShowCloseButton(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyKeyCaptureWidget":
        this.setHandler("notify::key-capture-widget", newValue)
        break
      case "onNotifySearchModeEnabled":
        this.setHandler("notify::search-mode-enabled", newValue)
        break
      case "onNotifyShowCloseButton":
        this.setHandler("notify::show-close-button", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
