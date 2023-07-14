import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class DragIcon<T extends Gtk.DragIcon> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.DragIcon() as T
  }

  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
}
