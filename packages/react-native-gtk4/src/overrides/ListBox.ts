import { Gtk } from "../index.js"
import ListBox from "../generated/widgets/ListBox.js"
import Widget from "../widget.js"

const parent = {
  appendChild: ListBox.prototype.appendChild,
  removeChild: ListBox.prototype.removeChild,
  insertBefore: ListBox.prototype.insertBefore,
}

ListBox.prototype.appendChild = function <T extends Gtk.ListBox>(
  this: ListBox<T>,
  child: Widget
) {
  parent.appendChild.call(this, child)
  this.node.append(child.node)
}

ListBox.prototype.removeChild = function <T extends Gtk.ListBox>(
  this: ListBox<T>,
  child: Widget
) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

ListBox.prototype.insertBefore = function <T extends Gtk.ListBox>(
  this: ListBox<T>,
  child: Widget,
  beforeChild: Widget
) {
  const afterIndex = this.children.indexOf(beforeChild) - 1

  if (afterIndex < 0) {
    this.node.prepend(child.node)
  } else {
    this.node.insert(child.node, afterIndex)
  }

  parent.insertBefore.call(this, child, beforeChild)
}
