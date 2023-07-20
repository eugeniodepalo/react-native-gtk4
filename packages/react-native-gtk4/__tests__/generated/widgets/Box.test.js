import { Box } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Box", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Box.mockImplementation(() => node)
    node = new Gtk.Box()
    widget = new Box({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP
    widget.set("baselinePosition", newValue)
    expect(node.setBaselinePosition).toHaveBeenCalledWith(newValue)
  })

  test("should set homogeneous", () => {
    const newValue = true
    widget.set("homogeneous", newValue)
    expect(node.setHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set spacing", () => {
    const newValue = 42
    widget.set("spacing", newValue)
    expect(node.setSpacing).toHaveBeenCalledWith(newValue)
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
