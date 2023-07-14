import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class WindowHandle<
  T extends Gtk.WindowHandle,
> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.WindowHandle() as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    this.node.setChild(child.node)
  }
}
