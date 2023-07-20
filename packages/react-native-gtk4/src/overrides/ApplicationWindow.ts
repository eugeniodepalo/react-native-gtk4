import ApplicationWindow from "../generated/widgets/ApplicationWindow.js"

const parent = {
  commitMount: ApplicationWindow.prototype.commitMount,
}

ApplicationWindow.prototype.commitMount = function (this: ApplicationWindow) {
  parent.commitMount.call(this)
  this.node.present()
}
