import { Gtk } from "../index.js"
import HeaderBar from "../generated/widgets/HeaderBar.js"
import Widget from "../widget.js"

const parent = {
  appendChild: HeaderBar.prototype.appendChild,
  removeChild: HeaderBar.prototype.removeChild,
  insertBefore: HeaderBar.prototype.insertBefore,
}

HeaderBar.prototype.appendChild = function <T extends Gtk.HeaderBar>(
  this: HeaderBar<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.packEnd(child.node)
}

HeaderBar.prototype.removeChild = function <T extends Gtk.HeaderBar>(
  this: HeaderBar<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

HeaderBar.prototype.insertBefore = function <T extends Gtk.HeaderBar>(
  this: HeaderBar<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  for (const child of this.children) {
    this.node.remove(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.packEnd(child.node)
  }
}
