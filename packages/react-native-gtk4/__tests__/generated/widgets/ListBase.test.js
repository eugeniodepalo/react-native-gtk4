import { ListBase } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListBase", () => {
  let widget

  beforeEach(() => {
    widget = new ListBase({}, ListBase.createNode({}))
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.orientation).toBe(newValue)
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()

    widget.set("onNotifyOrientation", callback)

    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::orientation",
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
