import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DropDown<
  T extends Gtk.DropDown = Gtk.DropDown,
> extends Widget<T> {
  createNode() {
    return new Gtk.DropDown({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enableSearch":
        if (this.node.getEnableSearch !== newValue) {
          this.node.setEnableSearch(newValue)
        }
        break
      case "expression":
        if (this.node.getExpression !== newValue) {
          this.node.setExpression(newValue)
        }
        break
      case "factory":
        if (this.node.getFactory !== newValue) {
          this.node.setFactory(newValue)
        }
        break
      case "listFactory":
        if (this.node.getListFactory !== newValue) {
          this.node.setListFactory(newValue)
        }
        break
      case "model":
        if (this.node.getModel !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "selected":
        if (this.node.getSelected !== newValue) {
          this.node.setSelected(newValue)
        }
        break
      case "showArrow":
        if (this.node.getShowArrow !== newValue) {
          this.node.setShowArrow(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onNotifyEnableSearch":
        this.setHandler("notify::enable-search", newValue)
        break
      case "onNotifyExpression":
        this.setHandler("notify::expression", newValue)
        break
      case "onNotifyFactory":
        this.setHandler("notify::factory", newValue)
        break
      case "onNotifyListFactory":
        this.setHandler("notify::list-factory", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifySelected":
        this.setHandler("notify::selected", newValue)
        break
      case "onNotifySelectedItem":
        this.setHandler("notify::selected-item", newValue)
        break
      case "onNotifyShowArrow":
        this.setHandler("notify::show-arrow", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
