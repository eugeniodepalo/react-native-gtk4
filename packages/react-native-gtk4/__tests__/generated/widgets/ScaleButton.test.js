import { ScaleButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ScaleButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ScaleButton()
    Gtk.ScaleButton.mockImplementation(() => node)
    widget = new ScaleButton({})
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(node.setAdjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set icons", () => {
    const newValue = "Some String"
    widget.set("icons", newValue)
    expect(node.setIcons).toHaveBeenCalledWith(newValue)
  })

  test("should set value", () => {
    const newValue = 1
    widget.set("value", newValue)
    expect(node.setValue).toHaveBeenCalledWith(newValue)
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

  test("should connect onPopdown", () => {
    const callback = jest.fn()
    widget.set("onPopdown", callback)
    const handler = widget.handlers["popdown"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("popdown", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPopup", () => {
    const callback = jest.fn()
    widget.set("onPopup", callback)
    const handler = widget.handlers["popup"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("popup", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onValueChanged", () => {
    const callback = jest.fn()
    widget.set("onValueChanged", callback)
    const handler = widget.handlers["value-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("value-changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActive", () => {
    const callback = jest.fn()
    widget.set("onNotifyActive", callback)
    const handler = widget.handlers["notify::active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::active", expect.any(Function))
  })

  test("should connect onNotifyAdjustment", () => {
    const callback = jest.fn()
    widget.set("onNotifyAdjustment", callback)
    const handler = widget.handlers["notify::adjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::adjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIcons", () => {
    const callback = jest.fn()
    widget.set("onNotifyIcons", callback)
    const handler = widget.handlers["notify::icons"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::icons", expect.any(Function))
  })

  test("should connect onNotifyValue", () => {
    const callback = jest.fn()
    widget.set("onNotifyValue", callback)
    const handler = widget.handlers["notify::value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::value", expect.any(Function))
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
