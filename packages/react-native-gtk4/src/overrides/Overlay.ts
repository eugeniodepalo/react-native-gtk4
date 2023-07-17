import { Gtk } from "../index.js"
import Overlay from "../generated/widgets/Overlay.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Widget.prototype.appendChild,
  removeChild: Widget.prototype.removeChild,
  insertBefore: Widget.prototype.insertBefore,
}

Overlay.prototype.appendChild = function <T extends Gtk.Overlay>(
  this: Overlay<T>,
  child: Widget
) {
  parent.appendChild.call(this, child)
  this.node.addOverlay(child.node)
}

Overlay.prototype.removeChild = function <T extends Gtk.Overlay>(
  this: Overlay<T>,
  child: Widget
) {
  parent.removeChild.call(this, child)
  this.node.removeOverlay(child.node)
}

Overlay.prototype.insertBefore = function <T extends Gtk.Overlay>(
  this: Overlay<T>,
  child: Widget,
  beforeChild: Widget
) {
  for (const child of this.children) {
    this.node.removeOverlay(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.addOverlay(child.node)
  }
}
