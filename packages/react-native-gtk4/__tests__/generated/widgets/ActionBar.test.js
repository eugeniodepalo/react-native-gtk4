import { ActionBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ActionBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ActionBar.mockImplementation(() => node)
    node = new Gtk.ActionBar()
    widget = new ActionBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set revealed", () => {
    const newValue = true
    widget.set("revealed", newValue)
    expect(node.setRevealed).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
