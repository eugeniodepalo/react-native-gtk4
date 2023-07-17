import Box from "../generated/widgets/Box.js"
import Widget from "../widget.js"

const parent = {
  appendChild: Box.prototype.appendChild,
  removeChild: Box.prototype.removeChild,
  insertBefore: Box.prototype.insertBefore,
}

Box.prototype.appendChild = function (this: Box, child: Widget) {
  parent.appendChild.call(this, child)
  this.node.append(child.node)
}

Box.prototype.removeChild = function (this: Box, child: Widget) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

Box.prototype.insertBefore = function (
  this: Box,
  child: Widget,
  beforeChild: Widget
) {
  const afterIndex = this.children.indexOf(beforeChild) - 1

  if (afterIndex < 0) {
    this.node.prepend(child.node)
  } else {
    const afterChild = this.children[afterIndex]
    this.node.insertChildAfter(child.node, afterChild.node)
  }

  parent.insertBefore.call(this, child, beforeChild)
}
