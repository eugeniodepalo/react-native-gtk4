import { Gtk } from "../index.js"
import Viewport from "../generated/widgets/Viewport.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Viewport.prototype.appendChild,
  removeChild: Viewport.prototype.removeChild,
  insertBefore: Viewport.prototype.insertBefore,
}

Viewport.prototype.appendChild = function <T extends Gtk.Viewport>(
  this: Viewport<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Viewport.prototype.removeChild = function <T extends Gtk.Viewport>(
  this: Viewport<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Viewport.prototype.insertBefore = function <T extends Gtk.Viewport>(
  this: Viewport<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
