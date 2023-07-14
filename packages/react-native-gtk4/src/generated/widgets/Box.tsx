import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Box<T extends Gtk.Box> extends Widget<T> {
  children: Widget<any>[] = []
  createNode(props: Record<string, any>) {
    return new Gtk.Box(props.orientation, props.spacing) as T
  }
  appendChild(child: Widget<any>) {
    this.node.append(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.remove(child.node)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    const beforeIndex = this.children.indexOf(beforeChild)
    const afterIndex = beforeIndex - 1
    if (afterIndex < 0) {
      this.children.unshift(child)
      this.node.prepend(child.node)
      return
    }
    this.node.insertChildAfter(child.node, this.children[afterIndex].node)
    this.children.splice(afterIndex, 0, child)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselinePosition":
        this.node.setBaselinePosition(newValue)
        break
      case "homogeneous":
        this.node.setHomogeneous(newValue)
        break
      case "spacing":
        this.node.setSpacing(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
