import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Grid<T extends Gtk.Grid = Gtk.Grid> extends Widget<T> {
  static createNode() {
    return new Gtk.Grid({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "baselineRow":
        this.node.setBaselineRow(newValue)
        break
      case "columnHomogeneous":
        this.node.setColumnHomogeneous(newValue)
        break
      case "columnSpacing":
        this.node.setColumnSpacing(newValue)
        break
      case "rowHomogeneous":
        this.node.setRowHomogeneous(newValue)
        break
      case "rowSpacing":
        this.node.setRowSpacing(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
