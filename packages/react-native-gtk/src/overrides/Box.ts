import Box from "../widgets/Box"

Box.prototype.appendChild = function (child: any) {
  this.node.append(child.node)
}

Box.prototype.removeChild = function (child: any) {
  this.node.remove(child.node)
}
