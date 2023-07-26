import AboutDialog from "../generated/widgets/AboutDialog.js"

const parent = {
  commitMount: AboutDialog.prototype.commitMount,
}

AboutDialog.prototype.commitMount = function (this: AboutDialog) {
  parent.commitMount.call(this)

  const activeWindow = this.context.application.getActiveWindow()

  if (activeWindow) {
    this.node.setDestroyWithParent(true)
    this.node.setModal(true)
    this.node.setTransientFor(activeWindow)
  }

  this.node.present()
}
