import { Overlay } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Overlay", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Overlay.mockImplementation(() => node)
    node = new Gtk.Overlay()
    widget = new Overlay({})
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
