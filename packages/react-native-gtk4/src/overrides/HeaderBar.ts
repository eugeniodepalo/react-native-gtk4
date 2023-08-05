import HeaderBar from "../generated/widgets/HeaderBar.js"
import AbstractWidget from "../widget.js"

const parent = {
  appendChild: HeaderBar.prototype.appendChild,
  removeChild: HeaderBar.prototype.removeChild,
  insertBefore: HeaderBar.prototype.insertBefore,
}

HeaderBar.prototype.appendChild = function (
  this: HeaderBar,
  child: AbstractWidget
) {
  parent.appendChild.call(this, child)
  this.node.packEnd(child.node)
}

HeaderBar.prototype.removeChild = function (
  this: HeaderBar,
  child: AbstractWidget
) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

HeaderBar.prototype.insertBefore = function (
  this: HeaderBar,
  child: AbstractWidget,
  beforeChild: AbstractWidget
) {
  for (const child of this.children) {
    this.node.remove(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.packEnd(child.node)
  }
}
