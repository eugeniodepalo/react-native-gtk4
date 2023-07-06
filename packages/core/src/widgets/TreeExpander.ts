import { Container, Gtk } from ".."
import Widget from "../widget"

export default class TreeExpander extends Widget {
  createNode(container: Container) {
    return new Gtk.TreeExpander()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
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
      case "item":
        this.node.setItem(newValue)
        break
      case "listRow":
        this.node.setListRow(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
