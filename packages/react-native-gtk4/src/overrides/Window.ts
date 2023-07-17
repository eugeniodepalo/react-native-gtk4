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
  if (child.node instanceof Gtk.Window) {
    return
  }

  parent.appendChild.call(this, child)
}

Window.prototype.removeChild = function <T extends Gtk.Window>(
  this: Window<T>,
  child: Widget<any>
) {
  if (child.node instanceof Gtk.Window) {
    child.node.destroy()
    return
  }

  parent.removeChild.call(this, child)
}

Window.prototype.insertBefore = function <T extends Gtk.Window>(
  this: Window<T>,
  child: Widget<any>,
  beforeChild: Widget<any>
) {
  if (child.node instanceof Gtk.Window) {
    return
  }

  parent.insertBefore.call(this, child, beforeChild)
}
