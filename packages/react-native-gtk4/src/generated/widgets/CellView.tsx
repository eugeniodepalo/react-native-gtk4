import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class CellView<
  T extends Gtk.CellView = Gtk.CellView,
> extends Widget<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.CellView({
      cell_area: props.cellArea,
      cell_area_context: props.cellAreaContext,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "drawSensitive":
        this.node.setDrawSensitive(newValue)
        break
      case "fitModel":
        this.node.setFitModel(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyCellArea":
        this.setHandler("notify::cell-area", newValue)
        break
      case "onNotifyCellAreaContext":
        this.setHandler("notify::cell-area-context", newValue)
        break
      case "onNotifyDrawSensitive":
        this.setHandler("notify::draw-sensitive", newValue)
        break
      case "onNotifyFitModel":
        this.setHandler("notify::fit-model", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
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
