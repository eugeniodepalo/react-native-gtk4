import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class DropDown<
  T extends Gtk.DropDown = Gtk.DropDown,
> extends Widget<T> {
  static createNode() {
    return new Gtk.DropDown({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enableSearch":
        this.node.setEnableSearch(newValue)
        break
      case "expression":
        this.node.setExpression(newValue)
        break
      case "factory":
        this.node.setFactory(newValue)
        break
      case "listFactory":
        this.node.setListFactory(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "selected":
        this.node.setSelected(newValue)
        break
      case "showArrow":
        this.node.setShowArrow(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
