import { Spinner } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Spinner", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Spinner()
    Gtk.Spinner.mockImplementation(() => node)
    widget = new Spinner({})
  })

  test("should set spinning", () => {
    const newValue = true
    widget.set("spinning", newValue)
    expect(node.setSpinning).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifySpinning", () => {
    const callback = jest.fn()
    widget.set("onNotifySpinning", callback)
    const handler = widget.handlers["notify::spinning"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::spinning",
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
