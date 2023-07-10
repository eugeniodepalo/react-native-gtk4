import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Scrollbar<T extends Gtk.Scrollbar> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Scrollbar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
