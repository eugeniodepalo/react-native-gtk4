import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class PopoverMenuBar<
  T extends Gtk.PopoverMenuBar,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.PopoverMenuBar(props.model) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "menuModel":
        this.node.setMenuModel(newValue)
        break
    }
  }
}
