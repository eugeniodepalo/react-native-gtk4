import { Fixed } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Fixed", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Fixed.mockImplementation(() => node)
    node = new Gtk.Fixed()
    widget = new Fixed({})
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
