import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ListBase extends Widget {
  createNode(container: Container) {
    return new Gtk.ListBase()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
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
      default:
        break
    }
  }
}
