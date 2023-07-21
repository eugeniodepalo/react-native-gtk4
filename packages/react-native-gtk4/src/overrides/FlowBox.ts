import FlowBox from "../generated/widgets/FlowBox.js"
import AnyWidget from "../widget.js"

const parent = {
  appendChild: FlowBox.prototype.appendChild,
  removeChild: FlowBox.prototype.removeChild,
  insertBefore: FlowBox.prototype.insertBefore,
}

FlowBox.prototype.appendChild = function (this: FlowBox, child: AnyWidget) {
  parent.appendChild.call(this, child)
  this.node.append(child.node)
}

FlowBox.prototype.removeChild = function (this: FlowBox, child: AnyWidget) {
  parent.removeChild.call(this, child)
  this.node.remove(child.node)
}

FlowBox.prototype.insertBefore = function (
  this: FlowBox,
  child: AnyWidget,
  beforeChild: AnyWidget
) {
  const afterIndex = this.children.indexOf(beforeChild) - 1

  if (afterIndex < 0) {
    this.node.prepend(child.node)
  } else {
    this.node.insert(child.node, afterIndex)
  }

  parent.insertBefore.call(this, child, beforeChild)
}
