import { StackSwitcher } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("StackSwitcher", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.StackSwitcher.mockImplementation(() => node)
    node = new Gtk.StackSwitcher()
    widget = new StackSwitcher({})
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })
})
