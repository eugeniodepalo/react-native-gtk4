import { Expander } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Expander", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Expander.mockImplementation(() => node)
    node = new Gtk.Expander()
    widget = new Expander({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set expanded", () => {
    const newValue = true
    widget.set("expanded", newValue)
    expect(node.setExpanded).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "New String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("labelWidget", newValue)
    expect(node.setLabelWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set resizeToplevel", () => {
    const newValue = true
    widget.set("resizeToplevel", newValue)
    expect(node.setResizeToplevel).toHaveBeenCalledWith(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(node.setUseMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
