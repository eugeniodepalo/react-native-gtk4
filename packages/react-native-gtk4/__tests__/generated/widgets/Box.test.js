import { Box } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Box", () => {
  let widget

  beforeEach(() => {
    widget = new Box({})
  })

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP
    widget.set("baselinePosition", newValue)
    expect(widget.node.setBaselinePosition).toHaveBeenCalledWith(newValue)
  })

  test("should set homogeneous", () => {
    const newValue = true
    widget.set("homogeneous", newValue)
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set spacing", () => {
    const newValue = 1
    widget.set("spacing", newValue)
    expect(widget.node.setSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onNotifyBaselinePosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyBaselinePosition", callback)

    const handler = widget.handlers["notify::baseline-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::baseline-position",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyHomogeneous", callback)

    const handler = widget.handlers["notify::homogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::homogeneous",
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
})
