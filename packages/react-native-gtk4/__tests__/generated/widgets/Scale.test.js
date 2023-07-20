import { Scale } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Scale", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Scale.mockImplementation(() => node)
    node = new Gtk.Scale()
    widget = new Scale({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set digits", () => {
    const newValue = 42
    widget.set("digits", newValue)
    expect(node.setDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set drawValue", () => {
    const newValue = true
    widget.set("drawValue", newValue)
    expect(node.setDrawValue).toHaveBeenCalledWith(newValue)
  })

  test("should set hasOrigin", () => {
    const newValue = true
    widget.set("hasOrigin", newValue)
    expect(node.setHasOrigin).toHaveBeenCalledWith(newValue)
  })

  test("should set valuePos", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("valuePos", newValue)
    expect(node.setValuePos).toHaveBeenCalledWith(newValue)
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
