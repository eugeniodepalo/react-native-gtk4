import { StackSidebar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("StackSidebar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.StackSidebar.mockImplementation(() => node)
    node = new Gtk.StackSidebar()
    widget = new StackSidebar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
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
})
