import { DragIcon } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DragIcon", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.DragIcon.mockImplementation(() => node)
    node = new Gtk.DragIcon()
    widget = new DragIcon({})
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
