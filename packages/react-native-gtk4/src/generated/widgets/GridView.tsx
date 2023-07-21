import Gtk from "@girs/node-gtk-4.0"
import ListBase from "./ListBase.js"

export default class GridView<
  T extends Gtk.GridView = Gtk.GridView,
> extends ListBase<T> {
  createNode() {
    return new Gtk.GridView({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enableRubberband":
        if (this.node.getEnableRubberband() !== newValue) {
          this.node.setEnableRubberband(newValue)
        }
        break
      case "factory":
        if (this.node.getFactory() !== newValue) {
          this.node.setFactory(newValue)
        }
        break
      case "maxColumns":
        if (this.node.getMaxColumns() !== newValue) {
          this.node.setMaxColumns(newValue)
        }
        break
      case "minColumns":
        if (this.node.getMinColumns() !== newValue) {
          this.node.setMinColumns(newValue)
        }
        break
      case "model":
        if (this.node.getModel() !== newValue) {
          this.node.setModel(newValue)
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
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
          this.node.setOrientation(newValue)
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
      case "onNotifyEnableRubberband":
        this.setHandler("notify::enable-rubberband", newValue)
        break
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue)
        break
      case "onNotifyMaxColumns":
        this.setHandler("notify::max-columns", newValue)
        break
      case "onNotifyMinColumns":
        this.setHandler("notify::min-columns", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifySingleClickActivate":
        this.setHandler("notify::single-click-activate", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
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
      default:
        break
    }
  }
}
