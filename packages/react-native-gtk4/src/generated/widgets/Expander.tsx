import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Expander<T extends Gtk.Expander> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Expander(props.label) as T
  }

  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "expanded":
        this.node.setExpanded(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "labelWidget":
        this.node.setLabelWidget(newValue)
        break
      case "resizeToplevel":
        this.node.setResizeToplevel(newValue)
        break
      case "useMarkup":
        this.node.setUseMarkup(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
    }
  }
}
