import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class SearchBar extends Widget {
  createNode(container: Container) {
    return new Gtk.SearchBar()
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
      case "keyCaptureWidget":
        this.node.setKeyCaptureWidget(newValue)
        break
      case "searchModeEnabled":
        this.node.setSearchModeEnabled(newValue)
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
