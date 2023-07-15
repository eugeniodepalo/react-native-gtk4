import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FlowBox<T extends Gtk.FlowBox> extends Widget<T> {
  createNode() {
    return new Gtk.FlowBox({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "acceptUnpairedRelease":
        this.node.acceptUnpairedRelease = newValue
        break
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue)
        break
      case "columnSpacing":
        this.node.setColumnSpacing(newValue)
        break
      case "homogeneous":
        this.node.setHomogeneous(newValue)
        break
      case "maxChildrenPerLine":
        this.node.setMaxChildrenPerLine(newValue)
        break
      case "minChildrenPerLine":
        this.node.setMinChildrenPerLine(newValue)
        break
      case "rowSpacing":
        this.node.setRowSpacing(newValue)
        break
      case "selectionMode":
        this.node.setSelectionMode(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onActivateCursorChild":
        this.setHandler("activate-cursor-child", newValue)
        break
      case "onChildActivated":
        this.setHandler("child-activated", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onSelectAll":
        this.setHandler("select-all", newValue)
        break
      case "onSelectedChildrenChanged":
        this.setHandler("selected-children-changed", newValue)
        break
      case "onToggleCursorChild":
        this.setHandler("toggle-cursor-child", newValue)
        break
      case "onUnselectAll":
        this.setHandler("unselect-all", newValue)
        break
    }
  }
}
