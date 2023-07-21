import Overlay from "../generated/widgets/Overlay.js"
import AnyWidget from "../widget.js"

const parent = {
  appendChild: AnyWidget.prototype.appendChild,
  removeChild: AnyWidget.prototype.removeChild,
  insertBefore: AnyWidget.prototype.insertBefore,
}

Overlay.prototype.appendChild = function (this: Overlay, child: AnyWidget) {
  parent.appendChild.call(this, child)
  this.node.addOverlay(child.node)
}

Overlay.prototype.removeChild = function (this: Overlay, child: AnyWidget) {
  parent.removeChild.call(this, child)
  this.node.removeOverlay(child.node)
}

Overlay.prototype.insertBefore = function (
  this: Overlay,
  child: AnyWidget,
  beforeChild: AnyWidget
) {
  for (const child of this.children) {
    this.node.removeOverlay(child.node)
  }

  parent.insertBefore.call(this, child, beforeChild)

  for (const child of this.children) {
    this.node.addOverlay(child.node)
  }
}
