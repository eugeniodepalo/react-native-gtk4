import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class HeaderBar<
  T extends Gtk.HeaderBar = Gtk.HeaderBar,
> extends Widget<T> {
  static createNode() {
    return new Gtk.HeaderBar({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "decorationLayout":
        this.node.setDecorationLayout(newValue)
        break
      case "showTitleButtons":
        this.node.setShowTitleButtons(newValue)
        break
      case "titleWidget":
        this.node.setTitleWidget(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyDecorationLayout":
        this.setHandler("notify::decoration-layout", newValue)
        break
      case "onNotifyShowTitleButtons":
        this.setHandler("notify::show-title-buttons", newValue)
        break
      case "onNotifyTitleWidget":
        this.setHandler("notify::title-widget", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
