import { Fixed } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Fixed", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Fixed()
    Gtk.Fixed.mockImplementation(() => node)
    widget = new Fixed({})
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
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
