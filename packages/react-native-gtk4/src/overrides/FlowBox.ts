import { Gtk } from "../index.js"
import FlowBox from "../generated/widgets/FlowBox.js"
import Widget from "../widget.js"

const parent = {
  appendChild: FlowBox.prototype.appendChild,
  removeChild: FlowBox.prototype.removeChild,
  insertBefore: FlowBox.prototype.insertBefore,
}

FlowBox.prototype.appendChild = function <T extends Gtk.FlowBox>(
  this: FlowBox<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.append(child.node)
}

FlowBox.prototype.removeChild = function <T extends Gtk.FlowBox>(
  this: FlowBox<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

FlowBox.prototype.insertBefore = function <T extends Gtk.FlowBox>(
  this: FlowBox<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  const afterIndex = this.children.indexOf(beforeChild) - 1

  if (afterIndex < 0) {
    this.node.prepend(child.node)
  } else {
    this.node.insert(child.node, afterIndex)
  }

  parent.insertBefore.call(this, child, beforeChild)
}
