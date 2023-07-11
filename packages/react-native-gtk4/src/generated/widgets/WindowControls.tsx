import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class WindowControls<
  T extends Gtk.WindowControls,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.WindowControls(props.side) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "decorationLayout":
        this.node.setDecorationLayout(newValue)
        break
      case "side":
        this.node.setSide(newValue)
        break
    }
  }
}
