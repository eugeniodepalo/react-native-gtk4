import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ActionBar<T extends Gtk.ActionBar> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.ActionBar() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "revealed":
        this.node.setRevealed(newValue)
        break
    }
  }
}
