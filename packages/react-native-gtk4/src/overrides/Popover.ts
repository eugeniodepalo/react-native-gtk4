import { Gtk } from "../index.js"
import Popover from "../generated/widgets/Popover.js"

Popover.prototype.commitMount = function <T extends Gtk.Popover>(
  this: Popover<T>
) {
  this.node.unparent()
}
