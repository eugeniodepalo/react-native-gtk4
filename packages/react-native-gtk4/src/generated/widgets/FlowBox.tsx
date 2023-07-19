import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class FlowBox<
  T extends Gtk.FlowBox = Gtk.FlowBox,
> extends Widget<T> {
  createNode() {
    return new Gtk.FlowBox({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "acceptUnpairedRelease":
        if (this.node.acceptUnpairedRelease !== newValue) {
          this.node.acceptUnpairedRelease = newValue
        }
        break
      case "activateOnSingleClick":
        if (this.node.activateOnSingleClick !== newValue) {
          this.node.setActivateOnSingleClick(newValue)
        }
        break
      case "columnSpacing":
        if (this.node.columnSpacing !== newValue) {
          this.node.setColumnSpacing(newValue)
        }
        break
      case "homogeneous":
        if (this.node.homogeneous !== newValue) {
          this.node.setHomogeneous(newValue)
        }
        break
      case "maxChildrenPerLine":
        if (this.node.maxChildrenPerLine !== newValue) {
          this.node.setMaxChildrenPerLine(newValue)
        }
        break
      case "minChildrenPerLine":
        if (this.node.minChildrenPerLine !== newValue) {
          this.node.setMinChildrenPerLine(newValue)
        }
        break
      case "rowSpacing":
        if (this.node.rowSpacing !== newValue) {
          this.node.setRowSpacing(newValue)
        }
        break
      case "selectionMode":
        if (this.node.selectionMode !== newValue) {
          this.node.setSelectionMode(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
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
      case "onNotifyAcceptUnpairedRelease":
        this.setHandler("notify::accept-unpaired-release", newValue)
        break
      case "onNotifyActivateOnSingleClick":
        this.setHandler("notify::activate-on-single-click", newValue)
        break
      case "onNotifyColumnSpacing":
        this.setHandler("notify::column-spacing", newValue)
        break
      case "onNotifyHomogeneous":
        this.setHandler("notify::homogeneous", newValue)
        break
      case "onNotifyMaxChildrenPerLine":
        this.setHandler("notify::max-children-per-line", newValue)
        break
      case "onNotifyMinChildrenPerLine":
        this.setHandler("notify::min-children-per-line", newValue)
        break
      case "onNotifyRowSpacing":
        this.setHandler("notify::row-spacing", newValue)
        break
      case "onNotifySelectionMode":
        this.setHandler("notify::selection-mode", newValue)
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
