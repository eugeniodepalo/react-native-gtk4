import { Gtk } from "../index.js"
import ScrolledWindow from "../generated/widgets/ScrolledWindow.js"
import Widget from "../widget.js"

const parent = {
  appendChild: ScrolledWindow.prototype.appendChild,
  removeChild: ScrolledWindow.prototype.removeChild,
  insertBefore: ScrolledWindow.prototype.insertBefore,
}

ScrolledWindow.prototype.appendChild = function <T extends Gtk.ScrolledWindow>(
  this: ScrolledWindow<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

ScrolledWindow.prototype.removeChild = function <T extends Gtk.ScrolledWindow>(
  this: ScrolledWindow<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

ScrolledWindow.prototype.insertBefore = function <T extends Gtk.ScrolledWindow>(
  this: ScrolledWindow<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
