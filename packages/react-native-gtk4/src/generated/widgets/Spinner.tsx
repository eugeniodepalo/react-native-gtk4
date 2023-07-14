import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Spinner<T extends Gtk.Spinner> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Spinner() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "spinning":
        this.node.setSpinning(newValue)
        break
    }
  }
}
