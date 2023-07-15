import { Gtk } from "../index.js"
import AboutDialog from "../generated/widgets/AboutDialog.js"

AboutDialog.prototype.commitMount = function <T extends Gtk.AboutDialog>(
  this: AboutDialog<T>
) {
  this.node.unparent()
}
