import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Statusbar<T extends Gtk.Statusbar> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Statusbar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "onTextPopped":
        if (oldValue) {
          this.node.off("text-popped", oldValue)
        }
        if (newValue) {
          this.node.on("text-popped", newValue)
        }
        break
      case "onTextPushed":
        if (oldValue) {
          this.node.off("text-pushed", oldValue)
        }
        if (newValue) {
          this.node.on("text-pushed", newValue)
        }
        break
    }
  }
}
