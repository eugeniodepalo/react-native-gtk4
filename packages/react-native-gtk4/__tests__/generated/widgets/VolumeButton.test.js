import { VolumeButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("VolumeButton", () => {
  let widget

  beforeEach(() => {
    widget = new VolumeButton({})
  })

  test("should set useSymbolic", () => {
    const newValue = true
    widget.set("useSymbolic", newValue)
    expect(widget.node.useSymbolic).toBe(newValue)
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

  test("should connect onNotifyUseSymbolic", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseSymbolic", callback)

    const handler = widget.handlers["notify::use-symbolic"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-symbolic",
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
