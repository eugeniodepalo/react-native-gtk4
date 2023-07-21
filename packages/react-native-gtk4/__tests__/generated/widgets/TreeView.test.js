import { TreeView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("TreeView", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.TreeView()
    Gtk.TreeView.mockImplementation(() => node)
    widget = new TreeView({})
  })

  test("should set activateOnSingleClick", () => {
    const newValue = true
    widget.set("activateOnSingleClick", newValue)
    expect(node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue)
  })

  test("should set enableGridLines", () => {
    const newValue = Gtk.TreeViewGridLines.NONE
    widget.set("enableGridLines", newValue)
    expect(node.enableGridLines).toBe(newValue)
  })

  test("should set enableSearch", () => {
    const newValue = true
    widget.set("enableSearch", newValue)
    expect(node.setEnableSearch).toHaveBeenCalledWith(newValue)
  })

  test("should set enableTreeLines", () => {
    const newValue = true
    widget.set("enableTreeLines", newValue)
    expect(node.setEnableTreeLines).toHaveBeenCalledWith(newValue)
  })

  test("should set expanderColumn", () => {
    const newValue = new Gtk.TreeViewColumn()
    widget.set("expanderColumn", newValue)
    expect(node.setExpanderColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set fixedHeightMode", () => {
    const newValue = true
    widget.set("fixedHeightMode", newValue)
    expect(node.setFixedHeightMode).toHaveBeenCalledWith(newValue)
  })

  test("should set headersClickable", () => {
    const newValue = true
    widget.set("headersClickable", newValue)
    expect(node.setHeadersClickable).toHaveBeenCalledWith(newValue)
  })

  test("should set headersVisible", () => {
    const newValue = true
    widget.set("headersVisible", newValue)
    expect(node.setHeadersVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set hoverExpand", () => {
    const newValue = true
    widget.set("hoverExpand", newValue)
    expect(node.setHoverExpand).toHaveBeenCalledWith(newValue)
  })

  test("should set hoverSelection", () => {
    const newValue = true
    widget.set("hoverSelection", newValue)
    expect(node.setHoverSelection).toHaveBeenCalledWith(newValue)
  })

  test("should set levelIndentation", () => {
    const newValue = 1
    widget.set("levelIndentation", newValue)
    expect(node.setLevelIndentation).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.TreeModel()
    widget.set("model", newValue)
    expect(node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set reorderable", () => {
    const newValue = true
    widget.set("reorderable", newValue)
    expect(node.setReorderable).toHaveBeenCalledWith(newValue)
  })

  test("should set rubberBanding", () => {
    const newValue = true
    widget.set("rubberBanding", newValue)
    expect(node.setRubberBanding).toHaveBeenCalledWith(newValue)
  })

  test("should set searchColumn", () => {
    const newValue = 1
    widget.set("searchColumn", newValue)
    expect(node.setSearchColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set showExpanders", () => {
    const newValue = true
    widget.set("showExpanders", newValue)
    expect(node.setShowExpanders).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipColumn", () => {
    const newValue = 1
    widget.set("tooltipColumn", newValue)
    expect(node.setTooltipColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should connect onColumnsChanged", () => {
    const callback = jest.fn()
    widget.set("onColumnsChanged", callback)
    const handler = widget.handlers["columns-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "columns-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCursorChanged", () => {
    const callback = jest.fn()
    widget.set("onCursorChanged", callback)
    const handler = widget.handlers["cursor-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("cursor-changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onExpandCollapseCursorRow", () => {
    const callback = jest.fn()
    widget.set("onExpandCollapseCursorRow", callback)
    const handler = widget.handlers["expand-collapse-cursor-row"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "expand-collapse-cursor-row",
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
    expect(node.on).toHaveBeenCalledWith("move-cursor", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRowActivated", () => {
    const callback = jest.fn()
    widget.set("onRowActivated", callback)
    const handler = widget.handlers["row-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("row-activated", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRowCollapsed", () => {
    const callback = jest.fn()
    widget.set("onRowCollapsed", callback)
    const handler = widget.handlers["row-collapsed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("row-collapsed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRowExpanded", () => {
    const callback = jest.fn()
    widget.set("onRowExpanded", callback)
    const handler = widget.handlers["row-expanded"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("row-expanded", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectAll", () => {
    const callback = jest.fn()
    widget.set("onSelectAll", callback)
    const handler = widget.handlers["select-all"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("select-all", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectCursorParent", () => {
    const callback = jest.fn()
    widget.set("onSelectCursorParent", callback)
    const handler = widget.handlers["select-cursor-parent"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "select-cursor-parent",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectCursorRow", () => {
    const callback = jest.fn()
    widget.set("onSelectCursorRow", callback)
    const handler = widget.handlers["select-cursor-row"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "select-cursor-row",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onStartInteractiveSearch", () => {
    const callback = jest.fn()
    widget.set("onStartInteractiveSearch", callback)
    const handler = widget.handlers["start-interactive-search"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "start-interactive-search",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onTestCollapseRow", () => {
    const callback = jest.fn()
    widget.set("onTestCollapseRow", callback)
    const handler = widget.handlers["test-collapse-row"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "test-collapse-row",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onTestExpandRow", () => {
    const callback = jest.fn()
    widget.set("onTestExpandRow", callback)
    const handler = widget.handlers["test-expand-row"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "test-expand-row",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleCursorRow", () => {
    const callback = jest.fn()
    widget.set("onToggleCursorRow", callback)
    const handler = widget.handlers["toggle-cursor-row"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "toggle-cursor-row",
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
    expect(node.on).toHaveBeenCalledWith("unselect-all", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActivateOnSingleClick", () => {
    const callback = jest.fn()
    widget.set("onNotifyActivateOnSingleClick", callback)
    const handler = widget.handlers["notify::activate-on-single-click"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::activate-on-single-click",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableGridLines", () => {
    const callback = jest.fn()
    widget.set("onNotifyEnableGridLines", callback)
    const handler = widget.handlers["notify::enable-grid-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::enable-grid-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableSearch", () => {
    const callback = jest.fn()
    widget.set("onNotifyEnableSearch", callback)
    const handler = widget.handlers["notify::enable-search"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::enable-search",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableTreeLines", () => {
    const callback = jest.fn()
    widget.set("onNotifyEnableTreeLines", callback)
    const handler = widget.handlers["notify::enable-tree-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::enable-tree-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyExpanderColumn", () => {
    const callback = jest.fn()
    widget.set("onNotifyExpanderColumn", callback)
    const handler = widget.handlers["notify::expander-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::expander-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFixedHeightMode", () => {
    const callback = jest.fn()
    widget.set("onNotifyFixedHeightMode", callback)
    const handler = widget.handlers["notify::fixed-height-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::fixed-height-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHeadersClickable", () => {
    const callback = jest.fn()
    widget.set("onNotifyHeadersClickable", callback)
    const handler = widget.handlers["notify::headers-clickable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::headers-clickable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHeadersVisible", () => {
    const callback = jest.fn()
    widget.set("onNotifyHeadersVisible", callback)
    const handler = widget.handlers["notify::headers-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::headers-visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHoverExpand", () => {
    const callback = jest.fn()
    widget.set("onNotifyHoverExpand", callback)
    const handler = widget.handlers["notify::hover-expand"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hover-expand",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHoverSelection", () => {
    const callback = jest.fn()
    widget.set("onNotifyHoverSelection", callback)
    const handler = widget.handlers["notify::hover-selection"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hover-selection",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLevelIndentation", () => {
    const callback = jest.fn()
    widget.set("onNotifyLevelIndentation", callback)
    const handler = widget.handlers["notify::level-indentation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::level-indentation",
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
    expect(node.on).toHaveBeenCalledWith("notify::model", expect.any(Function))
  })

  test("should connect onNotifyReorderable", () => {
    const callback = jest.fn()
    widget.set("onNotifyReorderable", callback)
    const handler = widget.handlers["notify::reorderable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::reorderable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRubberBanding", () => {
    const callback = jest.fn()
    widget.set("onNotifyRubberBanding", callback)
    const handler = widget.handlers["notify::rubber-banding"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::rubber-banding",
      expect.any(Function)
    )
  })

  test("should connect onNotifySearchColumn", () => {
    const callback = jest.fn()
    widget.set("onNotifySearchColumn", callback)
    const handler = widget.handlers["notify::search-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::search-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowExpanders", () => {
    const callback = jest.fn()
    widget.set("onNotifyShowExpanders", callback)
    const handler = widget.handlers["notify::show-expanders"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::show-expanders",
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::vscroll-policy",
      expect.any(Function)
    )
  })
})
