import { Viewport } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Viewport", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Viewport.mockImplementation(() => node)
    node = new Gtk.Viewport()
    widget = new Viewport({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set scrollToFocus", () => {
    const newValue = true
    widget.set("scrollToFocus", newValue)
    expect(node.setScrollToFocus).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
  })
})
