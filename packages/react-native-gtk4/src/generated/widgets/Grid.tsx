import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Grid<T extends Gtk.Grid = Gtk.Grid> extends Widget<T> {
  createNode() {
    return new Gtk.Grid({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "baselineRow":
        if (this.node.getBaselineRow() !== newValue) {
          this.node.setBaselineRow(newValue)
        }
        break
      case "columnHomogeneous":
        if (this.node.getColumnHomogeneous() !== newValue) {
          this.node.setColumnHomogeneous(newValue)
        }
        break
      case "columnSpacing":
        if (this.node.getColumnSpacing() !== newValue) {
          this.node.setColumnSpacing(newValue)
        }
        break
      case "rowHomogeneous":
        if (this.node.getRowHomogeneous() !== newValue) {
          this.node.setRowHomogeneous(newValue)
        }
        break
      case "rowSpacing":
        if (this.node.getRowSpacing() !== newValue) {
          this.node.setRowSpacing(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
          this.node.setOrientation(newValue)
        }
        break
      case "onNotifyBaselineRow":
        this.setHandler("notify::baseline-row", newValue)
        break
      case "onNotifyColumnHomogeneous":
        this.setHandler("notify::column-homogeneous", newValue)
        break
      case "onNotifyColumnSpacing":
        this.setHandler("notify::column-spacing", newValue)
        break
      case "onNotifyRowHomogeneous":
        this.setHandler("notify::row-homogeneous", newValue)
        break
      case "onNotifyRowSpacing":
        this.setHandler("notify::row-spacing", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      default:
        break
    }
  }
}
