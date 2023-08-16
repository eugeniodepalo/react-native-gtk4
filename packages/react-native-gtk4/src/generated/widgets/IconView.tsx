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
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
