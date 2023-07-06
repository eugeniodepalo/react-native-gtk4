import { Container, Gtk } from ".."
import Widget from "../widget"

export default class FlowBox extends Widget {
  createNode(container: Container) {
    return new Gtk.FlowBox()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "acceptUnpairedRelease":
        this.node.setAcceptUnpairedRelease(newValue)
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
        this.node.setAccessibleRole(newValue)
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onActivateCursorChild":
        if (oldValue) {
          this.node.off("activate-cursor-child", oldValue)
        }
        if (newValue) {
          this.node.on("activate-cursor-child", newValue)
        }
        break
      case "onChildActivated":
        if (oldValue) {
          this.node.off("child-activated", oldValue)
        }
        if (newValue) {
          this.node.on("child-activated", newValue)
        }
        break
      case "onMoveCursor":
        if (oldValue) {
          this.node.off("move-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("move-cursor", newValue)
        }
        break
      case "onSelectAll":
        if (oldValue) {
          this.node.off("select-all", oldValue)
        }
        if (newValue) {
          this.node.on("select-all", newValue)
        }
        break
      case "onSelectedChildrenChanged":
        if (oldValue) {
          this.node.off("selected-children-changed", oldValue)
        }
        if (newValue) {
          this.node.on("selected-children-changed", newValue)
        }
        break
      case "onToggleCursorChild":
        if (oldValue) {
          this.node.off("toggle-cursor-child", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-cursor-child", newValue)
        }
        break
      case "onUnselectAll":
        if (oldValue) {
          this.node.off("unselect-all", oldValue)
        }
        if (newValue) {
          this.node.on("unselect-all", newValue)
        }
        break
      default:
        break
    }
  }
}
