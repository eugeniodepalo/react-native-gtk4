import ApplicationWindow from "../generated/widgets/ApplicationWindow.js"
import Widget from "../widget.js"

const parent = {
  commitMount: Widget.prototype.commitMount,
}

ApplicationWindow.prototype.commitMount = function (this: ApplicationWindow) {
  parent.commitMount.call(this)
  this.node.present()
}
