import GeneratedBox from "../widgets/Box"

export default class Box extends GeneratedBox {
  appendChild(child: any) {
    this.node.append(child.node)
  }
  removeChild(child: any) {
    this.node.remove(child.node)
  }
}
