import { LevelBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("LevelBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.LevelBar.mockImplementation(() => node)
    node = new Gtk.LevelBar()
    widget = new LevelBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set maxValue", () => {
    const newValue = 42
    widget.set("maxValue", newValue)
    expect(node.setMaxValue).toHaveBeenCalledWith(newValue)
  })

  test("should set minValue", () => {
    const newValue = 42
    widget.set("minValue", newValue)
    expect(node.setMinValue).toHaveBeenCalledWith(newValue)
  })

  test("should set mode", () => {
    const newValue = Gtk.LevelBarMode.CONTINUOUS
    widget.set("mode", newValue)
    expect(node.setMode).toHaveBeenCalledWith(newValue)
  })

  test("should set value", () => {
    const newValue = 42
    widget.set("value", newValue)
    expect(node.setValue).toHaveBeenCalledWith(newValue)
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
