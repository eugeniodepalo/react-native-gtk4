import Window from "../generated/widgets/Window.js"

const parent = {
  commitMount: Window.prototype.commitMount,
}

Window.prototype.commitMount = function (this: Window) {
  parent.commitMount.call(this)
  this.node.on("close-request", () => true, true)
}
