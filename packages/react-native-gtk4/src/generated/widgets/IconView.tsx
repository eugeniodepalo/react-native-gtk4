import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class IconView<T extends Gtk.IconView> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.IconView() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activateOnSingleClick":
        this.node.setActivateOnSingleClick(newValue)
        break
      case "columnSpacing":
        this.node.setColumnSpacing(newValue)
        break
      case "columns":
        this.node.setColumns(newValue)
        break
      case "itemOrientation":
        this.node.setItemOrientation(newValue)
        break
      case "itemPadding":
        this.node.setItemPadding(newValue)
        break
      case "itemWidth":
        this.node.setItemWidth(newValue)
        break
      case "margin":
        this.node.setMargin(newValue)
        break
      case "markupColumn":
        this.node.setMarkupColumn(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "pixbufColumn":
        this.node.setPixbufColumn(newValue)
        break
      case "reorderable":
        this.node.setReorderable(newValue)
        break
      case "rowSpacing":
        this.node.setRowSpacing(newValue)
        break
      case "selectionMode":
        this.node.setSelectionMode(newValue)
        break
      case "spacing":
        this.node.setSpacing(newValue)
        break
      case "textColumn":
        this.node.setTextColumn(newValue)
        break
      case "tooltipColumn":
        this.node.setTooltipColumn(newValue)
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
      case "onActivateCursorItem":
        if (oldValue) {
          this.node.off("activate-cursor-item", oldValue)
        }
        if (newValue) {
          this.node.on("activate-cursor-item", newValue)
        }
        break
      case "onItemActivated":
        if (oldValue) {
          this.node.off("item-activated", oldValue)
        }
        if (newValue) {
          this.node.on("item-activated", newValue)
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
      case "onSelectCursorItem":
        if (oldValue) {
          this.node.off("select-cursor-item", oldValue)
        }
        if (newValue) {
          this.node.on("select-cursor-item", newValue)
        }
        break
      case "onSelectionChanged":
        if (oldValue) {
          this.node.off("selection-changed", oldValue)
        }
        if (newValue) {
          this.node.on("selection-changed", newValue)
        }
        break
      case "onToggleCursorItem":
        if (oldValue) {
          this.node.off("toggle-cursor-item", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-cursor-item", newValue)
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
    }
  }
}
