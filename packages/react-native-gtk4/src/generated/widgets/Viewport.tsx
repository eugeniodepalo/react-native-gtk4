import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Viewport<T extends Gtk.Viewport> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Viewport(props.hadjustment, props.vadjustment) as T
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
      case "scrollToFocus":
        this.node.setScrollToFocus(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
        break
    }
  }
}
