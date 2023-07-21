import { ShortcutLabel } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutLabel", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ShortcutLabel()
    Gtk.ShortcutLabel.mockImplementation(() => node)
    widget = new ShortcutLabel({})
  })

  test("should set accelerator", () => {
    const newValue = "Some String"
    widget.set("accelerator", newValue)
    expect(node.setAccelerator).toHaveBeenCalledWith(newValue)
  })

  test("should set disabledText", () => {
    const newValue = "Some String"
    widget.set("disabledText", newValue)
    expect(node.setDisabledText).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyAccelerator", () => {
    const callback = jest.fn()
    widget.set("onNotifyAccelerator", callback)
    const handler = widget.handlers["notify::accelerator"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accelerator",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDisabledText", () => {
    const callback = jest.fn()
    widget.set("onNotifyDisabledText", callback)
    const handler = widget.handlers["notify::disabled-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::disabled-text",
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
})
