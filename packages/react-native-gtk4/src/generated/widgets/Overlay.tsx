import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Overlay<T extends Gtk.Overlay> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Overlay() as T
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
      case "onGetChildPosition":
        if (oldValue) {
          this.node.off("get-child-position", oldValue)
        }
        if (newValue) {
          this.node.on("get-child-position", newValue)
        }
        break
    }
  }
}