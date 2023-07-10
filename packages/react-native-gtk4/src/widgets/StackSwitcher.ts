import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class StackSwitcher<
  T extends Gtk.StackSwitcher,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.StackSwitcher() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "stack":
        this.node.setStack(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      default:
        break
    }
  }
}
