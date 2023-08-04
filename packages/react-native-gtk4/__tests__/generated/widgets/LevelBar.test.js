import { LevelBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("LevelBar", () => {
  let widget

  beforeEach(() => {
    widget = new LevelBar({}, LevelBar.createNode({}))
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(widget.node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set maxValue", () => {
    const newValue = 1
    widget.set("maxValue", newValue)
    expect(widget.node.setMaxValue).toHaveBeenCalledWith(newValue)
  })

  test("should set minValue", () => {
    const newValue = 1
    widget.set("minValue", newValue)
    expect(widget.node.setMinValue).toHaveBeenCalledWith(newValue)
  })

  test("should set mode", () => {
    const newValue = Gtk.LevelBarMode.CONTINUOUS
    widget.set("mode", newValue)
    expect(widget.node.setMode).toHaveBeenCalledWith(newValue)
  })

  test("should set value", () => {
    const newValue = 1
    widget.set("value", newValue)
    expect(widget.node.setValue).toHaveBeenCalledWith(newValue)
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

  test("should connect onOffsetChanged", () => {
    const callback = jest.fn()

    widget.set("onOffsetChanged", callback)

    const handler = widget.handlers["offset-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "offset-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyInverted", () => {
    const callback = jest.fn()

    widget.set("onNotifyInverted", callback)

    const handler = widget.handlers["notify::inverted"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inverted",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxValue", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxValue", callback)

    const handler = widget.handlers["notify::max-value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-value",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinValue", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinValue", callback)

    const handler = widget.handlers["notify::min-value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-value",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyMode", callback)

    const handler = widget.handlers["notify::mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyValue", () => {
    const callback = jest.fn()

    widget.set("onNotifyValue", callback)

    const handler = widget.handlers["notify::value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::value",
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
