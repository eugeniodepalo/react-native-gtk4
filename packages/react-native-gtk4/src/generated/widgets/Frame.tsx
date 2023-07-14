import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Frame<T extends Gtk.Frame> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Frame(props.label) as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "label":
        this.node.setLabel(newValue)
        break
      case "labelWidget":
        this.node.setLabelWidget(newValue)
        break
    }
  }
}
