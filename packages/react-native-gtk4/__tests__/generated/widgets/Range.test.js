import { Range } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Range", () => {
  let widget

  beforeEach(() => {
    widget = new Range({})
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(widget.node.setAdjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set fillLevel", () => {
    const newValue = 1
    widget.set("fillLevel", newValue)
    expect(widget.node.setFillLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(widget.node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set restrictToFillLevel", () => {
    const newValue = true
    widget.set("restrictToFillLevel", newValue)
    expect(widget.node.setRestrictToFillLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set roundDigits", () => {
    const newValue = 1
    widget.set("roundDigits", newValue)
    expect(widget.node.setRoundDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set showFillLevel", () => {
    const newValue = true
    widget.set("showFillLevel", newValue)
    expect(widget.node.setShowFillLevel).toHaveBeenCalledWith(newValue)
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

  test("should connect onAdjustBounds", () => {
    const callback = jest.fn()

    widget.set("onAdjustBounds", callback)

    const handler = widget.handlers["adjust-bounds"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "adjust-bounds",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChangeValue", () => {
    const callback = jest.fn()

    widget.set("onChangeValue", callback)

    const handler = widget.handlers["change-value"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "change-value",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveSlider", () => {
    const callback = jest.fn()

    widget.set("onMoveSlider", callback)

    const handler = widget.handlers["move-slider"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-slider",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onValueChanged", () => {
    const callback = jest.fn()

    widget.set("onValueChanged", callback)

    const handler = widget.handlers["value-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "value-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAdjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyAdjustment", callback)

    const handler = widget.handlers["notify::adjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::adjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFillLevel", () => {
    const callback = jest.fn()

    widget.set("onNotifyFillLevel", callback)

    const handler = widget.handlers["notify::fill-level"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fill-level",
      expect.any(Function)
    )
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

  test("should connect onNotifyRestrictToFillLevel", () => {
    const callback = jest.fn()

    widget.set("onNotifyRestrictToFillLevel", callback)

    const handler = widget.handlers["notify::restrict-to-fill-level"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::restrict-to-fill-level",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRoundDigits", () => {
    const callback = jest.fn()

    widget.set("onNotifyRoundDigits", callback)

    const handler = widget.handlers["notify::round-digits"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::round-digits",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowFillLevel", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowFillLevel", callback)

    const handler = widget.handlers["notify::show-fill-level"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-fill-level",
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
