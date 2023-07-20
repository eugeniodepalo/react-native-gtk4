import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class TreeExpander<
  T extends Gtk.TreeExpander = Gtk.TreeExpander,
> extends Widget<T> {
  createNode() {
    return new Gtk.TreeExpander({}) as T
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
      case "indentForIcon":
        if (this.node.getIndentForIcon !== newValue) {
          this.node.setIndentForIcon(newValue)
        }
        break
      case "listRow":
        if (this.node.getListRow !== newValue) {
          this.node.setListRow(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
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
    }
  }
}
