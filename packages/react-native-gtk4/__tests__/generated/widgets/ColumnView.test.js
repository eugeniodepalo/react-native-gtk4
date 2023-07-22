import { ColumnView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ColumnView", () => {
  let widget

  beforeEach(() => {
    widget = new ColumnView({})
  })

  test("should set enableRubberband", () => {
    const newValue = true
    widget.set("enableRubberband", newValue)
    expect(widget.node.setEnableRubberband).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.SelectionModel()
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set reorderable", () => {
    const newValue = true
    widget.set("reorderable", newValue)
    expect(widget.node.setReorderable).toHaveBeenCalledWith(newValue)
  })

  test("should set showColumnSeparators", () => {
    const newValue = true
    widget.set("showColumnSeparators", newValue)
    expect(widget.node.setShowColumnSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set showRowSeparators", () => {
    const newValue = true
    widget.set("showRowSeparators", newValue)
    expect(widget.node.setShowRowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set singleClickActivate", () => {
    const newValue = true
    widget.set("singleClickActivate", newValue)
    expect(widget.node.setSingleClickActivate).toHaveBeenCalledWith(newValue)
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

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
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

  test("should connect onNotifyEnableRubberband", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableRubberband", callback)

    const handler = widget.handlers["notify::enable-rubberband"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-rubberband",
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

  test("should connect onNotifyShowColumnSeparators", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowColumnSeparators", callback)

    const handler = widget.handlers["notify::show-column-separators"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-column-separators",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowRowSeparators", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowRowSeparators", callback)

    const handler = widget.handlers["notify::show-row-separators"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-row-separators",
      expect.any(Function)
    )
  })

  test("should connect onNotifySingleClickActivate", () => {
    const callback = jest.fn()

    widget.set("onNotifySingleClickActivate", callback)

    const handler = widget.handlers["notify::single-click-activate"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::single-click-activate",
      expect.any(Function)
    )
  })

  test("should connect onNotifySorter", () => {
    const callback = jest.fn()

    widget.set("onNotifySorter", callback)

    const handler = widget.handlers["notify::sorter"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::sorter",
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
