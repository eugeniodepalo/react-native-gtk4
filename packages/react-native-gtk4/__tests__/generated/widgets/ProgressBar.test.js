import { ProgressBar } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gtk from "@girs/node-gtk-4.0"

describe("ProgressBar", () => {
  let widget

  beforeEach(() => {
    widget = new ProgressBar({})
  })

  test("should set ellipsize", () => {
    const newValue = Pango.EllipsizeMode.NONE
    widget.set("ellipsize", newValue)
    expect(widget.node.setEllipsize).toHaveBeenCalledWith(newValue)
  })

  test("should set fraction", () => {
    const newValue = 1
    widget.set("fraction", newValue)
    expect(widget.node.setFraction).toHaveBeenCalledWith(newValue)
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(widget.node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set pulseStep", () => {
    const newValue = 1
    widget.set("pulseStep", newValue)
    expect(widget.node.setPulseStep).toHaveBeenCalledWith(newValue)
  })

  test("should set showText", () => {
    const newValue = true
    widget.set("showText", newValue)
    expect(widget.node.setShowText).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyEllipsize", () => {
    const callback = jest.fn()

    widget.set("onNotifyEllipsize", callback)

    const handler = widget.handlers["notify::ellipsize"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::ellipsize",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFraction", () => {
    const callback = jest.fn()

    widget.set("onNotifyFraction", callback)

    const handler = widget.handlers["notify::fraction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::fraction",
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

  test("should connect onNotifyPulseStep", () => {
    const callback = jest.fn()

    widget.set("onNotifyPulseStep", callback)

    const handler = widget.handlers["notify::pulse-step"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pulse-step",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowText", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowText", callback)

    const handler = widget.handlers["notify::show-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyText", () => {
    const callback = jest.fn()

    widget.set("onNotifyText", callback)

    const handler = widget.handlers["notify::text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
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
