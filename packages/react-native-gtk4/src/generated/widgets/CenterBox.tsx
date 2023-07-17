import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class CenterBox<
  T extends Gtk.CenterBox = Gtk.CenterBox,
> extends Widget<T> {
  createNode() {
    return new Gtk.CenterBox({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "baselinePosition":
        this.node.setBaselinePosition(newValue)
        break
      case "centerWidget":
        this.node.setCenterWidget(newValue)
        break
      case "endWidget":
        this.node.setEndWidget(newValue)
        break
      case "startWidget":
        this.node.setStartWidget(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyBaselinePosition":
        this.setHandler("notify::baseline-position", newValue)
        break
      case "onNotifyCenterWidget":
        this.setHandler("notify::center-widget", newValue)
        break
      case "onNotifyEndWidget":
        this.setHandler("notify::end-widget", newValue)
        break
      case "onNotifyStartWidget":
        this.setHandler("notify::start-widget", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
