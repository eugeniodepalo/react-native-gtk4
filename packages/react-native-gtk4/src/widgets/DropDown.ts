import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class DropDown extends Widget {
  createNode(container: Container) {
    return new Gtk.DropDown()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
      case "selectedItem":
        this.node.setSelectedItem(newValue)
        break
      case "showArrow":
        this.node.setShowArrow(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      default:
        break
    }
  }
}
