import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ColumnView<
  T extends Gtk.ColumnView = Gtk.ColumnView,
> extends Widget<T> {
  createNode() {
    return new Gtk.ColumnView({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableRubberband":
        if (this.node.enableRubberband !== newValue) {
          this.node.setEnableRubberband(newValue)
        }
        break
      case "model":
        if (this.node.model !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "reorderable":
        if (this.node.reorderable !== newValue) {
          this.node.setReorderable(newValue)
        }
        break
      case "showColumnSeparators":
        if (this.node.showColumnSeparators !== newValue) {
          this.node.setShowColumnSeparators(newValue)
        }
        break
      case "showRowSeparators":
        if (this.node.showRowSeparators !== newValue) {
          this.node.setShowRowSeparators(newValue)
        }
        break
      case "singleClickActivate":
        if (this.node.singleClickActivate !== newValue) {
          this.node.setSingleClickActivate(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "hadjustment":
        if (this.node.hadjustment !== newValue) {
          this.node.setHadjustment(newValue)
        }
        break
      case "hscrollPolicy":
        if (this.node.hscrollPolicy !== newValue) {
          this.node.setHscrollPolicy(newValue)
        }
        break
      case "vadjustment":
        if (this.node.vadjustment !== newValue) {
          this.node.setVadjustment(newValue)
        }
        break
      case "vscrollPolicy":
        if (this.node.vscrollPolicy !== newValue) {
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
    }
  }
}
