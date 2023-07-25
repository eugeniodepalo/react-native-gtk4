import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ColumnView<
  T extends Gtk.ColumnView = Gtk.ColumnView,
> extends Widget<T> {
  createNode() {
    return new Gtk.ColumnView({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enableRubberband":
        if (this.node.getEnableRubberband() !== newValue) {
          this.node.setEnableRubberband(newValue)
        }
        break
      case "model":
        if (this.node.getModel() !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "reorderable":
        if (this.node.getReorderable() !== newValue) {
          this.node.setReorderable(newValue)
        }
        break
      case "showColumnSeparators":
        if (this.node.getShowColumnSeparators() !== newValue) {
          this.node.setShowColumnSeparators(newValue)
        }
        break
      case "showRowSeparators":
        if (this.node.getShowRowSeparators() !== newValue) {
          this.node.setShowRowSeparators(newValue)
        }
        break
      case "singleClickActivate":
        if (this.node.getSingleClickActivate() !== newValue) {
          this.node.setSingleClickActivate(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "hadjustment":
        if (this.node.getHadjustment() !== newValue) {
          this.node.setHadjustment(newValue)
        }
        break
      case "hscrollPolicy":
        if (this.node.getHscrollPolicy() !== newValue) {
          this.node.setHscrollPolicy(newValue)
        }
        break
      case "vadjustment":
        if (this.node.getVadjustment() !== newValue) {
          this.node.setVadjustment(newValue)
        }
        break
      case "vscrollPolicy":
        if (this.node.getVscrollPolicy() !== newValue) {
          this.node.setVscrollPolicy(newValue)
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyColumns":
        this.setHandler("notify::columns", newValue)
        break
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enable-rubberband", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyReorderable":
        this.setHandler("notify::reorderable", newValue)
        break
      case "onNotifyShowColumnSeparators":
        this.setHandler("notify::show-column-separators", newValue)
        break
      case "onNotifyShowRowSeparators":
        this.setHandler("notify::show-row-separators", newValue)
        break
      case "onNotifySingleClickActivate":
        this.setHandler("notify::single-click-activate", newValue)
        break
      case "onNotifySorter":
        this.setHandler("notify::sorter", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscroll-policy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscroll-policy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
