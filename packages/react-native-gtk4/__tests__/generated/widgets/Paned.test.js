import { Paned } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Paned", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Paned.mockImplementation(() => node)
    node = new Gtk.Paned()
    widget = new Paned({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set endChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("endChild", newValue)
    expect(node.setEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set position", () => {
    const newValue = 42
    widget.set("position", newValue)
    expect(node.setPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set positionSet", () => {
    const newValue = true
    widget.set("positionSet", newValue)
    expect(node.positionSet).toBe(newValue)
  })

  test("should set resizeEndChild", () => {
    const newValue = true
    widget.set("resizeEndChild", newValue)
    expect(node.setResizeEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set resizeStartChild", () => {
    const newValue = true
    widget.set("resizeStartChild", newValue)
    expect(node.setResizeStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set shrinkEndChild", () => {
    const newValue = true
    widget.set("shrinkEndChild", newValue)
    expect(node.setShrinkEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set shrinkStartChild", () => {
    const newValue = true
    widget.set("shrinkStartChild", newValue)
    expect(node.setShrinkStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set startChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("startChild", newValue)
    expect(node.setStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set wideHandle", () => {
    const newValue = true
    widget.set("wideHandle", newValue)
    expect(node.setWideHandle).toHaveBeenCalledWith(newValue)
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
