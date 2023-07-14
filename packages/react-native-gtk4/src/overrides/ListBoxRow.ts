import { Gtk } from "../index.js"
import ListBoxRow from "../generated/widgets/ListBoxRow.js"
import Widget from "../widget.js"

const parent = {
  appendChild: ListBoxRow.prototype.appendChild,
  removeChild: ListBoxRow.prototype.removeChild,
  insertBefore: ListBoxRow.prototype.insertBefore,
}

ListBoxRow.prototype.appendChild = function <T extends Gtk.ListBoxRow>(
  this: ListBoxRow<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

ListBoxRow.prototype.removeChild = function <T extends Gtk.ListBoxRow>(
  this: ListBoxRow<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

ListBoxRow.prototype.insertBefore = function <T extends Gtk.ListBoxRow>(
  this: ListBoxRow<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
