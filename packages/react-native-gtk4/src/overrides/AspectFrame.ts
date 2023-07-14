import { Gtk } from "../index.js"
import AspectFrame from "../generated/widgets/AspectFrame.js"
import Widget from "../widget.js"

const parent = {
  appendChild: AspectFrame.prototype.appendChild,
  removeChild: AspectFrame.prototype.removeChild,
  insertBefore: AspectFrame.prototype.insertBefore,
}

AspectFrame.prototype.appendChild = function <T extends Gtk.AspectFrame>(
  this: AspectFrame<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

AspectFrame.prototype.removeChild = function <T extends Gtk.AspectFrame>(
  this: AspectFrame<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

AspectFrame.prototype.insertBefore = function <T extends Gtk.AspectFrame>(
  this: AspectFrame<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
