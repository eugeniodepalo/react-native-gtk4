import GeneratedBox from "../generated/Box"
import Element from "../element"

export default class Box extends GeneratedBox {
  appendChild(child: Element) {
    this.node.append(child.node)
  }
  removeChild(child: Element) {
    this.node.remove(child.node)
  }
}
