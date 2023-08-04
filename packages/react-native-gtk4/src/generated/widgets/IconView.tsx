import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class IconView<
  T extends Gtk.IconView = Gtk.IconView,
> extends Widget<T> {
  static createNode(props: Record<string, any> = {}) {
    return new Gtk.IconView({
      cellArea: props.cellArea,
    })
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "activateOnSingleClick":
        if (this.node.getActivateOnSingleClick() !== newValue) {
          this.node.setActivateOnSingleClick(newValue)
        }
        break
      case "columnSpacing":
        if (this.node.getColumnSpacing() !== newValue) {
          this.node.setColumnSpacing(newValue)
        }
        break
      case "columns":
        if (this.node.getColumns() !== newValue) {
          this.node.setColumns(newValue)
        }
        break
      case "itemOrientation":
        if (this.node.getItemOrientation() !== newValue) {
          this.node.setItemOrientation(newValue)
        }
        break
      case "itemPadding":
        if (this.node.getItemPadding() !== newValue) {
          this.node.setItemPadding(newValue)
        }
        break
      case "itemWidth":
        if (this.node.getItemWidth() !== newValue) {
          this.node.setItemWidth(newValue)
        }
        break
      case "margin":
        if (this.node.getMargin() !== newValue) {
          this.node.setMargin(newValue)
        }
        break
      case "markupColumn":
        if (this.node.getMarkupColumn() !== newValue) {
          this.node.setMarkupColumn(newValue)
        }
        break
      case "model":
        if (this.node.getModel() !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "pixbufColumn":
        if (this.node.getPixbufColumn() !== newValue) {
          this.node.setPixbufColumn(newValue)
        }
        break
      case "reorderable":
        if (this.node.getReorderable() !== newValue) {
          this.node.setReorderable(newValue)
        }
        break
      case "rowSpacing":
        if (this.node.getRowSpacing() !== newValue) {
          this.node.setRowSpacing(newValue)
        }
        break
      case "selectionMode":
        if (this.node.getSelectionMode() !== newValue) {
          this.node.setSelectionMode(newValue)
        }
        break
      case "spacing":
        if (this.node.getSpacing() !== newValue) {
          this.node.setSpacing(newValue)
        }
        break
      case "textColumn":
        if (this.node.getTextColumn() !== newValue) {
          this.node.setTextColumn(newValue)
        }
        break
      case "tooltipColumn":
        if (this.node.getTooltipColumn() !== newValue) {
          this.node.setTooltipColumn(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "hadjustment":
        if (this.node.getHadjustment() !== newValue) {
          this.node.setHadjustment(newValue)
        }
        break
      case "hscrollPolicy":
        if (this.node.getHscrollPolicy() !== newValue) {
          this.node.setHscrollPolicy(newValue)
        }
        break
      case "vadjustment":
        if (this.node.getVadjustment() !== newValue) {
          this.node.setVadjustment(newValue)
        }
        break
      case "vscrollPolicy":
        if (this.node.getVscrollPolicy() !== newValue) {
          this.node.setVscrollPolicy(newValue)
        }
        break
      case "onActivateCursorItem":
        this.setHandler("activate-cursor-item", newValue)
        break
      case "onItemActivated":
        this.setHandler("item-activated", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onSelectAll":
        this.setHandler("select-all", newValue)
        break
      case "onSelectCursorItem":
        this.setHandler("select-cursor-item", newValue)
        break
      case "onSelectionChanged":
        this.setHandler("selection-changed", newValue)
        break
      case "onToggleCursorItem":
        this.setHandler("toggle-cursor-item", newValue)
        break
      case "onUnselectAll":
        this.setHandler("unselect-all", newValue)
        break
      case "onNotifyActivateOnSingleClick":
        this.setHandler("notify::activate-on-single-click", newValue)
        break
      case "onNotifyCellArea":
        this.setHandler("notify::cell-area", newValue)
        break
      case "onNotifyColumnSpacing":
        this.setHandler("notify::column-spacing", newValue)
        break
      case "onNotifyColumns":
        this.setHandler("notify::columns", newValue)
        break
      case "onNotifyItemOrientation":
        this.setHandler("notify::item-orientation", newValue)
        break
      case "onNotifyItemPadding":
        this.setHandler("notify::item-padding", newValue)
        break
      case "onNotifyItemWidth":
        this.setHandler("notify::item-width", newValue)
        break
      case "onNotifyMargin":
        this.setHandler("notify::margin", newValue)
        break
      case "onNotifyMarkupColumn":
        this.setHandler("notify::markup-column", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyPixbufColumn":
        this.setHandler("notify::pixbuf-column", newValue)
        break
      case "onNotifyReorderable":
        this.setHandler("notify::reorderable", newValue)
        break
      case "onNotifyRowSpacing":
        this.setHandler("notify::row-spacing", newValue)
        break
      case "onNotifySelectionMode":
        this.setHandler("notify::selection-mode", newValue)
        break
      case "onNotifySpacing":
        this.setHandler("notify::spacing", newValue)
        break
      case "onNotifyTextColumn":
        this.setHandler("notify::text-column", newValue)
        break
      case "onNotifyTooltipColumn":
        this.setHandler("notify::tooltip-column", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscroll-policy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscroll-policy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
