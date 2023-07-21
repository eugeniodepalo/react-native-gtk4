import { Grid } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Grid", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Grid()
    Gtk.Grid.mockImplementation(() => node)
    widget = new Grid({})
  })

  test("should set baselineRow", () => {
    const newValue = 1
    widget.set("baselineRow", newValue)
    expect(node.setBaselineRow).toHaveBeenCalledWith(newValue)
  })

  test("should set columnHomogeneous", () => {
    const newValue = true
    widget.set("columnHomogeneous", newValue)
    expect(node.setColumnHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set columnSpacing", () => {
    const newValue = 1
    widget.set("columnSpacing", newValue)
    expect(node.setColumnSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set rowHomogeneous", () => {
    const newValue = true
    widget.set("rowHomogeneous", newValue)
    expect(node.setRowHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set rowSpacing", () => {
    const newValue = 1
    widget.set("rowSpacing", newValue)
    expect(node.setRowSpacing).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyBaselineRow", () => {
    const callback = jest.fn()
    widget.set("onNotifyBaselineRow", callback)
    const handler = widget.handlers["notify::baseline-row"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::baseline-row",
      expect.any(Function)
    )
  })

  test("should connect onNotifyColumnHomogeneous", () => {
    const callback = jest.fn()
    widget.set("onNotifyColumnHomogeneous", callback)
    const handler = widget.handlers["notify::column-homogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::column-homogeneous",
      expect.any(Function)
    )
  })

  test("should connect onNotifyColumnSpacing", () => {
    const callback = jest.fn()
    widget.set("onNotifyColumnSpacing", callback)
    const handler = widget.handlers["notify::column-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::column-spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRowHomogeneous", () => {
    const callback = jest.fn()
    widget.set("onNotifyRowHomogeneous", callback)
    const handler = widget.handlers["notify::row-homogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::row-homogeneous",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRowSpacing", () => {
    const callback = jest.fn()
    widget.set("onNotifyRowSpacing", callback)
    const handler = widget.handlers["notify::row-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::row-spacing",
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
