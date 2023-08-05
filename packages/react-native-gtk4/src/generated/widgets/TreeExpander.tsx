import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class TreeExpander<
  T extends Gtk.TreeExpander = Gtk.TreeExpander,
> extends Widget<T> {
  static createNode() {
    return new Gtk.TreeExpander({})
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
      case "hideExpander":
        if (this.node.getHideExpander() !== newValue) {
          this.node.setHideExpander(newValue)
        }
        break
      case "indentForDepth":
        if (this.node.getIndentForDepth() !== newValue) {
          this.node.setIndentForDepth(newValue)
        }
        break
      case "indentForIcon":
        if (this.node.getIndentForIcon() !== newValue) {
          this.node.setIndentForIcon(newValue)
        }
        break
      case "listRow":
        if (this.node.getListRow() !== newValue) {
          this.node.setListRow(newValue)
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
      case "onNotifyHideExpander":
        this.setHandler("notify::hide-expander", newValue)
        break
      case "onNotifyIndentForDepth":
        this.setHandler("notify::indent-for-depth", newValue)
        break
      case "onNotifyIndentForIcon":
        this.setHandler("notify::indent-for-icon", newValue)
        break
      case "onNotifyItem":
        this.setHandler("notify::item", newValue)
        break
      case "onNotifyListRow":
        this.setHandler("notify::list-row", newValue)
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
