import Gtk from "@girs/node-gtk-4.0"
import ListBase from "./ListBase.js"

export default class GridView<
  T extends Gtk.GridView = Gtk.GridView,
> extends ListBase<T> {
  static createNode() {
    return new Gtk.GridView({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enableRubberband":
        this.node.setEnableRubberband(newValue)
        break
      case "factory":
        this.node.setFactory(newValue)
        break
      case "maxColumns":
        this.node.setMaxColumns(newValue)
        break
      case "minColumns":
        this.node.setMinColumns(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "singleClickActivate":
        this.node.setSingleClickActivate(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
