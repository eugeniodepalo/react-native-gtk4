import { DrawingArea } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DrawingArea", () => {
  let widget

  beforeEach(() => {
    widget = new DrawingArea({})
  })

  test("should set contentHeight", () => {
    const newValue = 1
    widget.set("contentHeight", newValue)
    expect(widget.node.setContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set contentWidth", () => {
    const newValue = 1
    widget.set("contentWidth", newValue)
    expect(widget.node.setContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onResize", () => {
    const callback = jest.fn()

    widget.set("onResize", callback)

    const handler = widget.handlers["resize"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("resize", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyContentHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentHeight", callback)

    const handler = widget.handlers["notify::content-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifyContentWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentWidth", callback)

    const handler = widget.handlers["notify::content-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content-width",
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
})
