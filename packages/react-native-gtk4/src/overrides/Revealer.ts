import { Gtk } from "../index.js"
import Revealer from "../generated/widgets/Revealer.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Revealer.prototype.appendChild,
  removeChild: Revealer.prototype.removeChild,
  insertBefore: Revealer.prototype.insertBefore,
}

Revealer.prototype.appendChild = function <T extends Gtk.Revealer>(
  this: Revealer<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Revealer.prototype.removeChild = function <T extends Gtk.Revealer>(
  this: Revealer<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Revealer.prototype.insertBefore = function <T extends Gtk.Revealer>(
  this: Revealer<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
