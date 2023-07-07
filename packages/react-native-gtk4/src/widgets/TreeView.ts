import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class TreeView extends Widget {
  createNode(container: Container) {
    return new Gtk.TreeView()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue)
        break
      case "enableGridLines":
        this.node.setEnableGridLines(newValue)
        break
      case "enableSearch":
        this.node.setEnableSearch(newValue)
        break
      case "enableTreeLines":
        this.node.setEnableTreeLines(newValue)
        break
      case "expanderColumn":
        this.node.setExpanderColumn(newValue)
        break
      case "fixedHeightMode":
        this.node.setFixedHeightMode(newValue)
        break
      case "headersClickable":
        this.node.setHeadersClickable(newValue)
        break
      case "headersVisible":
        this.node.setHeadersVisible(newValue)
        break
      case "hoverExpand":
        this.node.setHoverExpand(newValue)
        break
      case "hoverSelection":
        this.node.setHoverSelection(newValue)
        break
      case "levelIndentation":
        this.node.setLevelIndentation(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "reorderable":
        this.node.setReorderable(newValue)
        break
      case "rubberBanding":
        this.node.setRubberBanding(newValue)
        break
      case "searchColumn":
        this.node.setSearchColumn(newValue)
        break
      case "showExpanders":
        this.node.setShowExpanders(newValue)
        break
      case "tooltipColumn":
        this.node.setTooltipColumn(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
        break
      case "onColumnsChanged":
        if (oldValue) {
          this.node.off("columns-changed", oldValue)
        }
        if (newValue) {
          this.node.on("columns-changed", newValue)
        }
        break
      case "onCursorChanged":
        if (oldValue) {
          this.node.off("cursor-changed", oldValue)
        }
        if (newValue) {
          this.node.on("cursor-changed", newValue)
        }
        break
      case "onExpandCollapseCursorRow":
        if (oldValue) {
          this.node.off("expand-collapse-cursor-row", oldValue)
        }
        if (newValue) {
          this.node.on("expand-collapse-cursor-row", newValue)
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
      case "onRowActivated":
        if (oldValue) {
          this.node.off("row-activated", oldValue)
        }
        if (newValue) {
          this.node.on("row-activated", newValue)
        }
        break
      case "onRowCollapsed":
        if (oldValue) {
          this.node.off("row-collapsed", oldValue)
        }
        if (newValue) {
          this.node.on("row-collapsed", newValue)
        }
        break
      case "onRowExpanded":
        if (oldValue) {
          this.node.off("row-expanded", oldValue)
        }
        if (newValue) {
          this.node.on("row-expanded", newValue)
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
      case "onSelectCursorParent":
        if (oldValue) {
          this.node.off("select-cursor-parent", oldValue)
        }
        if (newValue) {
          this.node.on("select-cursor-parent", newValue)
        }
        break
      case "onSelectCursorRow":
        if (oldValue) {
          this.node.off("select-cursor-row", oldValue)
        }
        if (newValue) {
          this.node.on("select-cursor-row", newValue)
        }
        break
      case "onStartInteractiveSearch":
        if (oldValue) {
          this.node.off("start-interactive-search", oldValue)
        }
        if (newValue) {
          this.node.on("start-interactive-search", newValue)
        }
        break
      case "onTestCollapseRow":
        if (oldValue) {
          this.node.off("test-collapse-row", oldValue)
        }
        if (newValue) {
          this.node.on("test-collapse-row", newValue)
        }
        break
      case "onTestExpandRow":
        if (oldValue) {
          this.node.off("test-expand-row", oldValue)
        }
        if (newValue) {
          this.node.on("test-expand-row", newValue)
        }
        break
      case "onToggleCursorRow":
        if (oldValue) {
          this.node.off("toggle-cursor-row", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-cursor-row", newValue)
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
