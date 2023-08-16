import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class SearchBar<
  T extends Gtk.SearchBar = Gtk.SearchBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.SearchBar({})
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
        this.node.setKeyCaptureWidget(newValue)
        break
      case "searchModeEnabled":
        this.node.searchModeEnabled = newValue
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
