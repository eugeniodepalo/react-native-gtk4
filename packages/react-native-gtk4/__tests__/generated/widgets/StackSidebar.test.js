import { StackSidebar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("StackSidebar", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.StackSidebar()
    Gtk.StackSidebar.mockImplementation(() => node)
    widget = new StackSidebar({})
  })

  test("should set stack", () => {
    const newValue = new Gtk.Stack()
    widget.set("stack", newValue)
    expect(node.setStack).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyStack", () => {
    const callback = jest.fn()
    widget.set("onNotifyStack", callback)
    const handler = widget.handlers["notify::stack"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::stack", expect.any(Function))
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
