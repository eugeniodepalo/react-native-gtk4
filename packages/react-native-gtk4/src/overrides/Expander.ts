import { Gtk } from "../index.js"
import Expander from "../generated/widgets/Expander.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Expander.prototype.appendChild,
  removeChild: Expander.prototype.removeChild,
  insertBefore: Expander.prototype.insertBefore,
}

Expander.prototype.appendChild = function <T extends Gtk.Expander>(
  this: Expander<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Expander.prototype.removeChild = function <T extends Gtk.Expander>(
  this: Expander<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Expander.prototype.insertBefore = function <T extends Gtk.Expander>(
  this: Expander<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
