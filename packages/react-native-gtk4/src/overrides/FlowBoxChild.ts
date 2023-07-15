import { Gtk } from "../index.js"
import FlowBoxChild from "../generated/widgets/FlowBoxChild.js"
import Widget from "../widget.js"

const parent = {
  appendChild: FlowBoxChild.prototype.appendChild,
  removeChild: FlowBoxChild.prototype.removeChild,
  insertBefore: FlowBoxChild.prototype.insertBefore,
}

FlowBoxChild.prototype.appendChild = function <T extends Gtk.FlowBoxChild>(
  this: FlowBoxChild<T>,
  child: Widget<any>
) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

FlowBoxChild.prototype.removeChild = function <T extends Gtk.FlowBoxChild>(
  this: FlowBoxChild<T>,
  child: Widget<any>
) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

FlowBoxChild.prototype.insertBefore = function <T extends Gtk.FlowBoxChild>(
  this: FlowBoxChild<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  this.node.setChild(child.node)
  parent.insertBefore.call(this, child, beforeChild)
}
