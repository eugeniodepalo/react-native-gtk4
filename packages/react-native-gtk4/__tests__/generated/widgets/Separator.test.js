import { Separator } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Separator", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Separator.mockImplementation(() => node)
    node = new Gtk.Separator()
    widget = new Separator({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
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
