import { Statusbar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Statusbar", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Statusbar()
    Gtk.Statusbar.mockImplementation(() => node)
    widget = new Statusbar({})
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onTextPopped", () => {
    const callback = jest.fn()
    widget.set("onTextPopped", callback)
    const handler = widget.handlers["text-popped"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("text-popped", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onTextPushed", () => {
    const callback = jest.fn()
    widget.set("onTextPushed", callback)
    const handler = widget.handlers["text-pushed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("text-pushed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
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
