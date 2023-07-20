import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class HeaderBar<
  T extends Gtk.HeaderBar = Gtk.HeaderBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.HeaderBar({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "decorationLayout":
        if (this.node.getDecorationLayout !== newValue) {
          this.node.setDecorationLayout(newValue)
        }
        break
      case "showTitleButtons":
        if (this.node.getShowTitleButtons !== newValue) {
          this.node.setShowTitleButtons(newValue)
        }
        break
      case "titleWidget":
        if (this.node.getTitleWidget !== newValue) {
          this.node.setTitleWidget(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
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
    }
  }
}
