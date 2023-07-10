import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class ListBase<T extends Gtk.ListBase> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ListBase() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
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
