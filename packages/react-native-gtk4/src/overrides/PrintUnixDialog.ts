import PrintUnixDialog from "../generated/widgets/PrintUnixDialog.js"

const parent = {
  commitMount: PrintUnixDialog.prototype.commitMount,
}

PrintUnixDialog.prototype.commitMount = function (this: PrintUnixDialog) {
  parent.commitMount.call(this)

  const activeWindow = this.context.application.getActiveWindow()

  if (activeWindow) {
    this.node.setDestroyWithParent(true)
    this.node.setModal(true)
    this.node.setTransientFor(activeWindow)
  }

  this.node.present()
}
