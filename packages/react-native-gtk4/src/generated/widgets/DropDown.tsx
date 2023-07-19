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
        if (this.node.enableSearch !== newValue) {
          this.node.setEnableSearch(newValue)
        }
        break
      case "expression":
        if (this.node.expression !== newValue) {
          this.node.setExpression(newValue)
        }
        break
      case "factory":
        if (this.node.factory !== newValue) {
          this.node.setFactory(newValue)
        }
        break
      case "listFactory":
        if (this.node.listFactory !== newValue) {
          this.node.setListFactory(newValue)
        }
        break
      case "model":
        if (this.node.model !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "selected":
        if (this.node.selected !== newValue) {
          this.node.setSelected(newValue)
        }
        break
      case "showArrow":
        if (this.node.showArrow !== newValue) {
          this.node.setShowArrow(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
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
