import Gtk from "@/generated/girs/node-gtk-4.0.js"
import PrintUnixDialog from "../generated/widgets/PrintUnixDialog.js"

const parent = {
  commitMount: PrintUnixDialog.prototype.commitMount,
}

PrintUnixDialog.prototype.commitMount = function (this: PrintUnixDialog) {
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
