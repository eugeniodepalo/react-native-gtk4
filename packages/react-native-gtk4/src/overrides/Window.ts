import Window from "../generated/widgets/Window.js"

const parent = {
  appendChild: Window.prototype.appendChild,
  removeChild: Window.prototype.removeChild,
  insertBefore: Window.prototype.insertBefore,
}

Window.prototype.appendChild = function (child) {
  parent.appendChild.call(this, child)
  this.node.setChild(child.node)
}

Window.prototype.removeChild = function (child) {
  parent.removeChild.call(this, child)
  this.node.setChild(null)
}

Window.prototype.insertBefore = function (child, beforeChild) {
  parent.insertBefore.call(this, child, beforeChild)
  this.node.setChild(child.node)
}
