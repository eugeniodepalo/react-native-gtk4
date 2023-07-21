import { CenterBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CenterBox", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.CenterBox()
    Gtk.CenterBox.mockImplementation(() => node)
    widget = new CenterBox({})
  })

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP
    widget.set("baselinePosition", newValue)
    expect(node.setBaselinePosition).toHaveBeenCalledWith(newValue)
  })

  test("should set centerWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("centerWidget", newValue)
    expect(node.setCenterWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set endWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("endWidget", newValue)
    expect(node.setEndWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set startWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("startWidget", newValue)
    expect(node.setStartWidget).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyBaselinePosition", () => {
    const callback = jest.fn()
    widget.set("onNotifyBaselinePosition", callback)
    const handler = widget.handlers["notify::baseline-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::baseline-position",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCenterWidget", () => {
    const callback = jest.fn()
    widget.set("onNotifyCenterWidget", callback)
    const handler = widget.handlers["notify::center-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::center-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEndWidget", () => {
    const callback = jest.fn()
    widget.set("onNotifyEndWidget", callback)
    const handler = widget.handlers["notify::end-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::end-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyStartWidget", () => {
    const callback = jest.fn()
    widget.set("onNotifyStartWidget", callback)
    const handler = widget.handlers["notify::start-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::start-widget",
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
