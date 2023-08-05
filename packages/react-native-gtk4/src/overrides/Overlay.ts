import Overlay from "../generated/widgets/Overlay.js"
import AbstractWidget from "../widget.js"

const parent = {
  appendChild: AbstractWidget.prototype.appendChild,
  removeChild: AbstractWidget.prototype.removeChild,
  insertBefore: AbstractWidget.prototype.insertBefore,
}

Overlay.prototype.appendChild = function (
  this: Overlay,
  child: AbstractWidget
) {
  parent.appendChild.call(this, child)
  this.node.addOverlay(child.node)
}

Overlay.prototype.removeChild = function (
  this: Overlay,
  child: AbstractWidget
) {
  parent.removeChild.call(this, child)
  this.node.removeOverlay(child.node)
}

Overlay.prototype.insertBefore = function (
  this: Overlay,
  child: AbstractWidget,
  beforeChild: AbstractWidget
) {
  for (const child of this.children) {
    this.node.removeOverlay(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.addOverlay(child.node)
  }
}
