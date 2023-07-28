import PageSetupUnixDialog from "../generated/widgets/PageSetupUnixDialog.js"

const parent = {
  commitMount: PageSetupUnixDialog.prototype.commitMount,
}

PageSetupUnixDialog.prototype.commitMount = function (
  this: PageSetupUnixDialog
) {
  parent.commitMount.call(this)

  const activeWindow = this.context.application.getActiveWindow()

  if (activeWindow) {
    this.node.setDestroyWithParent(true)
    this.node.setModal(true)
    this.node.setTransientFor(activeWindow)
  }

  this.node.present()
}
