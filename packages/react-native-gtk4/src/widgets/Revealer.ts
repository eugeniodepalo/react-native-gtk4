import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Revealer<T extends Gtk.Revealer> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.Revealer() as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "revealChild":
        this.node.setRevealChild(newValue)
        break
      case "transitionDuration":
        this.node.setTransitionDuration(newValue)
        break
      case "transitionType":
        this.node.setTransitionType(newValue)
        break
      default:
        break
    }
  }
}
