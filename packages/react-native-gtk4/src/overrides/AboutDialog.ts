import Gtk from "@girs/node-gtk-4.0"
import AboutDialog from "../generated/widgets/AboutDialog.js"

const parent = {
  commitMount: AboutDialog.prototype.commitMount,
}

AboutDialog.prototype.commitMount = function (this: AboutDialog) {
  parent.commitMount.call(this)

  const application = this.getClosestParentOfType(Gtk.Application)
  const activeWindow = application?.getActiveWindow()

  if (activeWindow) {
    this.node.setDestroyWithParent(true)
    this.node.setModal(true)
    this.node.setTransientFor(activeWindow)
  }

  this.node.present()
}
