import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class TreeExpander<
  T extends Gtk.TreeExpander,
> extends Widget<T> {
  createNode() {
    return new Gtk.TreeExpander() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hideExpander":
        this.node.setHideExpander(newValue)
        break
      case "indentForDepth":
        this.node.setIndentForDepth(newValue)
        break
      case "indentForIcon":
        this.node.setIndentForIcon(newValue)
        break
      case "listRow":
        this.node.setListRow(newValue)
        break
    }
  }
}
