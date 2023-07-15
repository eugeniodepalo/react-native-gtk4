import { Gtk } from "../index.js"
import Window from "../generated/widgets/Window.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Window.prototype.appendChild,
  removeChild: Window.prototype.removeChild,
  insertBefore: Window.prototype.insertBefore,
}

Window.prototype.appendChild = function <T extends Gtk.Window>(
  this: Window<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Window.prototype.removeChild = function <T extends Gtk.Window>(
  this: Window<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Window.prototype.insertBefore = function <T extends Gtk.Window>(
  this: Window<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  parent.insertBefore.call(this, child, beforeChild)
  this.node.setChild(child.node)
}
