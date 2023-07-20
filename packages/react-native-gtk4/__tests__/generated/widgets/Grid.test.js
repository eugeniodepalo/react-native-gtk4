import { Grid } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Grid", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Grid.mockImplementation(() => node)
    node = new Gtk.Grid()
    widget = new Grid({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set baselineRow", () => {
    const newValue = 42
    widget.set("baselineRow", newValue)
    expect(node.setBaselineRow).toHaveBeenCalledWith(newValue)
  })

  test("should set columnHomogeneous", () => {
    const newValue = true
    widget.set("columnHomogeneous", newValue)
    expect(node.setColumnHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set columnSpacing", () => {
    const newValue = 42
    widget.set("columnSpacing", newValue)
    expect(node.setColumnSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set rowHomogeneous", () => {
    const newValue = true
    widget.set("rowHomogeneous", newValue)
    expect(node.setRowHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set rowSpacing", () => {
    const newValue = 42
    widget.set("rowSpacing", newValue)
    expect(node.setRowSpacing).toHaveBeenCalledWith(newValue)
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
