import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SearchBar<T extends Gtk.SearchBar> extends Widget<T> {
  createNode() {
    return new Gtk.SearchBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "keyCaptureWidget":
        this.node.setKeyCaptureWidget(newValue)
        break
      case "searchModeEnabled":
        this.node.searchModeEnabled = newValue
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
    }
  }
}
