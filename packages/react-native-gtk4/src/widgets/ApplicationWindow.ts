import { Container, Gtk } from "../index.js"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow,
> extends Window<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ApplicationWindow() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue)
        break
      default:
        break
    }
  }
}
