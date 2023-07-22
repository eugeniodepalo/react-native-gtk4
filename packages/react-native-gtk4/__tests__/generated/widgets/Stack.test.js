import { Stack } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Stack", () => {
  let widget

  beforeEach(() => {
    widget = new Stack({})
  })

  test("should set hhomogeneous", () => {
    const newValue = true
    widget.set("hhomogeneous", newValue)
    expect(widget.node.setHhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set interpolateSize", () => {
    const newValue = true
    widget.set("interpolateSize", newValue)
    expect(widget.node.setInterpolateSize).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 1
    widget.set("transitionDuration", newValue)
    expect(widget.node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Gtk.StackTransitionType.NONE
    widget.set("transitionType", newValue)
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue)
  })

  test("should set vhomogeneous", () => {
    const newValue = true
    widget.set("vhomogeneous", newValue)
    expect(widget.node.setVhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("visibleChild", newValue)
    expect(widget.node.setVisibleChild).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChildName", () => {
    const newValue = "Some String"
    widget.set("visibleChildName", newValue)
    expect(widget.node.setVisibleChildName).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyHhomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyHhomogeneous", callback)

    const handler = widget.handlers["notify::hhomogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hhomogeneous",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInterpolateSize", () => {
    const callback = jest.fn()

    widget.set("onNotifyInterpolateSize", callback)

    const handler = widget.handlers["notify::interpolate-size"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::interpolate-size",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPages", () => {
    const callback = jest.fn()

    widget.set("onNotifyPages", callback)

    const handler = widget.handlers["notify::pages"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pages",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransitionDuration", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionDuration", callback)

    const handler = widget.handlers["notify::transition-duration"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transition-duration",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransitionRunning", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionRunning", callback)

    const handler = widget.handlers["notify::transition-running"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transition-running",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransitionType", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionType", callback)

    const handler = widget.handlers["notify::transition-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transition-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVhomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyVhomogeneous", callback)

    const handler = widget.handlers["notify::vhomogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vhomogeneous",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVisibleChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibleChild", callback)

    const handler = widget.handlers["notify::visible-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visible-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVisibleChildName", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibleChildName", callback)

    const handler = widget.handlers["notify::visible-child-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visible-child-name",
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
