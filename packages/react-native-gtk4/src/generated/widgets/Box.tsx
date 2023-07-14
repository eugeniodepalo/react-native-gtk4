import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Box<T extends Gtk.Box> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Box(props.orientation, props.spacing) as T
  }

  appendChild(child: Widget<any>) {
    this.node.append(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.remove(child.node)
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
