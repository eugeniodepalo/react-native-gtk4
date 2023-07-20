import { FlowBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FlowBox", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.FlowBox.mockImplementation(() => node)
    node = new Gtk.FlowBox()
    widget = new FlowBox({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set acceptUnpairedRelease", () => {
    const newValue = true
    widget.set("acceptUnpairedRelease", newValue)
    expect(node.acceptUnpairedRelease).toBe(newValue)
  })

  test("should set activateOnSingleClick", () => {
    const newValue = true
    widget.set("activateOnSingleClick", newValue)
    expect(node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue)
  })

  test("should set columnSpacing", () => {
    const newValue = 42
    widget.set("columnSpacing", newValue)
    expect(node.setColumnSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set homogeneous", () => {
    const newValue = true
    widget.set("homogeneous", newValue)
    expect(node.setHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set maxChildrenPerLine", () => {
    const newValue = 42
    widget.set("maxChildrenPerLine", newValue)
    expect(node.setMaxChildrenPerLine).toHaveBeenCalledWith(newValue)
  })

  test("should set minChildrenPerLine", () => {
    const newValue = 42
    widget.set("minChildrenPerLine", newValue)
    expect(node.setMinChildrenPerLine).toHaveBeenCalledWith(newValue)
  })

  test("should set rowSpacing", () => {
    const newValue = 42
    widget.set("rowSpacing", newValue)
    expect(node.setRowSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set selectionMode", () => {
    const newValue = Gtk.SelectionMode.NONE
    widget.set("selectionMode", newValue)
    expect(node.setSelectionMode).toHaveBeenCalledWith(newValue)
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
