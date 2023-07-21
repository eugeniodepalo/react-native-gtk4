import { Scale } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Scale", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Scale()
    Gtk.Scale.mockImplementation(() => node)
    widget = new Scale({})
  })

  test("should set digits", () => {
    const newValue = 1
    widget.set("digits", newValue)
    expect(node.setDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set drawValue", () => {
    const newValue = true
    widget.set("drawValue", newValue)
    expect(node.setDrawValue).toHaveBeenCalledWith(newValue)
  })

  test("should set hasOrigin", () => {
    const newValue = true
    widget.set("hasOrigin", newValue)
    expect(node.setHasOrigin).toHaveBeenCalledWith(newValue)
  })

  test("should set valuePos", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("valuePos", newValue)
    expect(node.setValuePos).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onNotifyDigits", () => {
    const callback = jest.fn()
    widget.set("onNotifyDigits", callback)
    const handler = widget.handlers["notify::digits"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::digits", expect.any(Function))
  })

  test("should connect onNotifyDrawValue", () => {
    const callback = jest.fn()
    widget.set("onNotifyDrawValue", callback)
    const handler = widget.handlers["notify::draw-value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::draw-value",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasOrigin", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasOrigin", callback)
    const handler = widget.handlers["notify::has-origin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-origin",
      expect.any(Function)
    )
  })

  test("should connect onNotifyValuePos", () => {
    const callback = jest.fn()
    widget.set("onNotifyValuePos", callback)
    const handler = widget.handlers["notify::value-pos"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::value-pos",
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()
    widget.set("onNotifyOrientation", callback)
    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    )
  })
})
