import { ColorDialogButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("ColorDialogButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ColorDialogButton()
    Gtk.ColorDialogButton.mockImplementation(() => node)
    widget = new ColorDialogButton({})
  })

  test("should set dialog", () => {
    const newValue = new Gtk.ColorDialog()
    widget.set("dialog", newValue)
    expect(node.setDialog).toHaveBeenCalledWith(newValue)
  })

  test("should set rgba", () => {
    const newValue = new Gdk.RGBA()
    widget.set("rgba", newValue)
    expect(node.setRgba).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyDialog", () => {
    const callback = jest.fn()
    widget.set("onNotifyDialog", callback)
    const handler = widget.handlers["notify::dialog"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::dialog", expect.any(Function))
  })

  test("should connect onNotifyRgba", () => {
    const callback = jest.fn()
    widget.set("onNotifyRgba", callback)
    const handler = widget.handlers["notify::rgba"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::rgba", expect.any(Function))
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
