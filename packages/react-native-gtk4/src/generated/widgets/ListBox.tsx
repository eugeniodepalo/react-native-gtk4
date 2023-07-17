import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ListBox<
  T extends Gtk.ListBox = Gtk.ListBox,
> extends Widget<T> {
  createNode() {
    return new Gtk.ListBox({}) as T
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
      case "selectionMode":
        this.node.setSelectionMode(newValue)
        break
      case "showSeparators":
        this.node.setShowSeparators(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onActivateCursorRow":
        this.setHandler("activate-cursor-row", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onRowActivated":
        this.setHandler("row-activated", newValue)
        break
      case "onRowSelected":
        this.setHandler("row-selected", newValue)
        break
      case "onSelectAll":
        this.setHandler("select-all", newValue)
        break
      case "onSelectedRowsChanged":
        this.setHandler("selected-rows-changed", newValue)
        break
      case "onToggleCursorRow":
        this.setHandler("toggle-cursor-row", newValue)
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
      case "onNotifySelectionMode":
        this.setHandler("notify::selection-mode", newValue)
        break
      case "onNotifyShowSeparators":
        this.setHandler("notify::show-separators", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
