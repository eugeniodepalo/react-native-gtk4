import Gtk from "@girs/node-gtk-4.0"
import NodeContainer from "./node.js"
import AbstractNode from "../node.js"
import Widget from "../generated/widgets/Widget.js"

export default class WidgetContainer<
  T extends Widget = Widget,
> extends NodeContainer<T, Gtk.Widget> {
  appendChild(child: AbstractNode<Gtk.Widget>) {
    this.node.appendChild(child)
    super.appendChild(child)
  }

  removeChild(child: AbstractNode<Gtk.Widget, any>) {
    this.node.removeChild(child)
    super.removeChild(child)
  }

  insertBefore(
    child: AbstractNode<Gtk.Widget>,
    beforeChild: AbstractNode<Gtk.Widget>
  ) {
    this.node.insertBefore(child, beforeChild)
    super.insertBefore(child, beforeChild)
  }
}
