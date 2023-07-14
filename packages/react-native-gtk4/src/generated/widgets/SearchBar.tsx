import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SearchBar<T extends Gtk.SearchBar> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.SearchBar() as T
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
      case "keyCaptureWidget":
        this.node.setKeyCaptureWidget(newValue)
        break
      case "showCloseButton":
        this.node.setShowCloseButton(newValue)
        break
    }
  }
}
