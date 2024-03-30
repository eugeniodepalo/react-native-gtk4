import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class CenterBox<
  T extends Gtk.CenterBox = Gtk.CenterBox,
> extends Widget<T> {
  static createNode() {
    return new Gtk.CenterBox({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
      case "shrinkCenterLast":
        this.node.setShrinkCenterLast(newValue)
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
      case "onNotifyShrinkCenterLast":
        this.setHandler("notify::shrink-center-last", newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
