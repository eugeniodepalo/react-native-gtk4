import { WindowHandle } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("WindowHandle", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.WindowHandle.mockImplementation(() => node)
    node = new Gtk.WindowHandle()
    widget = new WindowHandle({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
