import { Gtk } from "../index.js"
import SearchBar from "../generated/widgets/SearchBar.js"
import Widget from "../widget.js"

const parent = {
  appendChild: SearchBar.prototype.appendChild,
  removeChild: SearchBar.prototype.removeChild,
  insertBefore: SearchBar.prototype.insertBefore,
}

SearchBar.prototype.appendChild = function <T extends Gtk.SearchBar>(
  this: SearchBar<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

SearchBar.prototype.removeChild = function <T extends Gtk.SearchBar>(
  this: SearchBar<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

SearchBar.prototype.insertBefore = function <T extends Gtk.SearchBar>(
  this: SearchBar<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
