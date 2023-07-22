import { IconView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("IconView", () => {
  let widget

  beforeEach(() => {
    widget = new IconView({})
  })

  test("should set construct only props", () => {
    const props = {
      cellArea: new Gtk.CellArea(),
    }

    new IconView(props)

    expect(Gtk.IconView).toHaveBeenCalledWith(props)
  })

  test("should set activateOnSingleClick", () => {
    const newValue = true
    widget.set("activateOnSingleClick", newValue)
    expect(widget.node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue)
  })

  test("should set columnSpacing", () => {
    const newValue = 1
    widget.set("columnSpacing", newValue)
    expect(widget.node.setColumnSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set columns", () => {
    const newValue = 1
    widget.set("columns", newValue)
    expect(widget.node.setColumns).toHaveBeenCalledWith(newValue)
  })

  test("should set itemOrientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("itemOrientation", newValue)
    expect(widget.node.setItemOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should set itemPadding", () => {
    const newValue = 1
    widget.set("itemPadding", newValue)
    expect(widget.node.setItemPadding).toHaveBeenCalledWith(newValue)
  })

  test("should set itemWidth", () => {
    const newValue = 1
    widget.set("itemWidth", newValue)
    expect(widget.node.setItemWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set margin", () => {
    const newValue = 1
    widget.set("margin", newValue)
    expect(widget.node.setMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set markupColumn", () => {
    const newValue = 1
    widget.set("markupColumn", newValue)
    expect(widget.node.setMarkupColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.TreeModel()
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set pixbufColumn", () => {
    const newValue = 1
    widget.set("pixbufColumn", newValue)
    expect(widget.node.setPixbufColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set reorderable", () => {
    const newValue = true
    widget.set("reorderable", newValue)
    expect(widget.node.setReorderable).toHaveBeenCalledWith(newValue)
  })

  test("should set rowSpacing", () => {
    const newValue = 1
    widget.set("rowSpacing", newValue)
    expect(widget.node.setRowSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set selectionMode", () => {
    const newValue = Gtk.SelectionMode.NONE
    widget.set("selectionMode", newValue)
    expect(widget.node.setSelectionMode).toHaveBeenCalledWith(newValue)
  })

  test("should set spacing", () => {
    const newValue = 1
    widget.set("spacing", newValue)
    expect(widget.node.setSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set textColumn", () => {
    const newValue = 1
    widget.set("textColumn", newValue)
    expect(widget.node.setTextColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipColumn", () => {
    const newValue = 1
    widget.set("tooltipColumn", newValue)
    expect(widget.node.setTooltipColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(widget.node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(widget.node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should connect onActivateCursorItem", () => {
    const callback = jest.fn()

    widget.set("onActivateCursorItem", callback)

    const handler = widget.handlers["activate-cursor-item"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-cursor-item",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onItemActivated", () => {
    const callback = jest.fn()

    widget.set("onItemActivated", callback)

    const handler = widget.handlers["item-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "item-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveCursor", () => {
    const callback = jest.fn()

    widget.set("onMoveCursor", callback)

    const handler = widget.handlers["move-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-cursor",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectAll", () => {
    const callback = jest.fn()

    widget.set("onSelectAll", callback)

    const handler = widget.handlers["select-all"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-all",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectCursorItem", () => {
    const callback = jest.fn()

    widget.set("onSelectCursorItem", callback)

    const handler = widget.handlers["select-cursor-item"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-cursor-item",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectionChanged", () => {
    const callback = jest.fn()

    widget.set("onSelectionChanged", callback)

    const handler = widget.handlers["selection-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "selection-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleCursorItem", () => {
    const callback = jest.fn()

    widget.set("onToggleCursorItem", callback)

    const handler = widget.handlers["toggle-cursor-item"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-cursor-item",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onUnselectAll", () => {
    const callback = jest.fn()

    widget.set("onUnselectAll", callback)

    const handler = widget.handlers["unselect-all"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "unselect-all",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActivateOnSingleClick", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivateOnSingleClick", callback)

    const handler = widget.handlers["notify::activate-on-single-click"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activate-on-single-click",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCellArea", () => {
    const callback = jest.fn()

    widget.set("onNotifyCellArea", callback)

    const handler = widget.handlers["notify::cell-area"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cell-area",
      expect.any(Function)
    )
  })

  test("should connect onNotifyColumnSpacing", () => {
    const callback = jest.fn()

    widget.set("onNotifyColumnSpacing", callback)

    const handler = widget.handlers["notify::column-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::column-spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifyColumns", () => {
    const callback = jest.fn()

    widget.set("onNotifyColumns", callback)

    const handler = widget.handlers["notify::columns"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::columns",
      expect.any(Function)
    )
  })

  test("should connect onNotifyItemOrientation", () => {
    const callback = jest.fn()

    widget.set("onNotifyItemOrientation", callback)

    const handler = widget.handlers["notify::item-orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::item-orientation",
      expect.any(Function)
    )
  })

  test("should connect onNotifyItemPadding", () => {
    const callback = jest.fn()

    widget.set("onNotifyItemPadding", callback)

    const handler = widget.handlers["notify::item-padding"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::item-padding",
      expect.any(Function)
    )
  })

  test("should connect onNotifyItemWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyItemWidth", callback)

    const handler = widget.handlers["notify::item-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::item-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMargin", () => {
    const callback = jest.fn()

    widget.set("onNotifyMargin", callback)

    const handler = widget.handlers["notify::margin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::margin",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMarkupColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyMarkupColumn", callback)

    const handler = widget.handlers["notify::markup-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::markup-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyModel", callback)

    const handler = widget.handlers["notify::model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::model",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPixbufColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyPixbufColumn", callback)

    const handler = widget.handlers["notify::pixbuf-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pixbuf-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyReorderable", () => {
    const callback = jest.fn()

    widget.set("onNotifyReorderable", callback)

    const handler = widget.handlers["notify::reorderable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::reorderable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRowSpacing", () => {
    const callback = jest.fn()

    widget.set("onNotifyRowSpacing", callback)

    const handler = widget.handlers["notify::row-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::row-spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectionMode", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectionMode", callback)

    const handler = widget.handlers["notify::selection-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selection-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifySpacing", () => {
    const callback = jest.fn()

    widget.set("onNotifySpacing", callback)

    const handler = widget.handlers["notify::spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextColumn", callback)

    const handler = widget.handlers["notify::text-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyTooltipColumn", callback)

    const handler = widget.handlers["notify::tooltip-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tooltip-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()

    widget.set("onNotifyAccessibleRole", callback)

    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyHadjustment", callback)

    const handler = widget.handlers["notify::hadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyHscrollPolicy", callback)

    const handler = widget.handlers["notify::hscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hscroll-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyVadjustment", callback)

    const handler = widget.handlers["notify::vadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyVscrollPolicy", callback)

    const handler = widget.handlers["notify::vscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vscroll-policy",
      expect.any(Function)
    )
  })
})
