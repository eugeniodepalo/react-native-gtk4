import { DrawingArea } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("DrawingArea", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.DrawingArea.mockImplementation(() => node)
    node = new Gtk.DrawingArea()
    widget = new DrawingArea({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set contentHeight", () => {
    const newValue = 42
    widget.set("contentHeight", newValue)
    expect(node.setContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set contentWidth", () => {
    const newValue = 42
    widget.set("contentWidth", newValue)
    expect(node.setContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
