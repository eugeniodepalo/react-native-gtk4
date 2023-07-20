import { Scrollbar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Scrollbar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Scrollbar.mockImplementation(() => node)
    node = new Gtk.Scrollbar()
    widget = new Scrollbar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(node.setAdjustment).toHaveBeenCalledWith(newValue)
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
