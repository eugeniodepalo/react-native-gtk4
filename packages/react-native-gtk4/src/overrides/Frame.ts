import { Gtk } from "../index.js"
import Frame from "../generated/widgets/Frame.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Frame.prototype.appendChild,
  removeChild: Frame.prototype.removeChild,
  insertBefore: Frame.prototype.insertBefore,
}

Frame.prototype.appendChild = function <T extends Gtk.Frame>(
  this: Frame<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Frame.prototype.removeChild = function <T extends Gtk.Frame>(
  this: Frame<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Frame.prototype.insertBefore = function <T extends Gtk.Frame>(
  this: Frame<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
