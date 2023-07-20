import { Range } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Range", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Range.mockImplementation(() => node)
    node = new Gtk.Range()
    widget = new Range({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(node.setAdjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set fillLevel", () => {
    const newValue = 42
    widget.set("fillLevel", newValue)
    expect(node.setFillLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set restrictToFillLevel", () => {
    const newValue = true
    widget.set("restrictToFillLevel", newValue)
    expect(node.setRestrictToFillLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set roundDigits", () => {
    const newValue = 42
    widget.set("roundDigits", newValue)
    expect(node.setRoundDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set showFillLevel", () => {
    const newValue = true
    widget.set("showFillLevel", newValue)
    expect(node.setShowFillLevel).toHaveBeenCalledWith(newValue)
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
