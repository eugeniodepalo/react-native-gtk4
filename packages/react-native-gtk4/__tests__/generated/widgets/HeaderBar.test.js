import { HeaderBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("HeaderBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.HeaderBar.mockImplementation(() => node)
    node = new Gtk.HeaderBar()
    widget = new HeaderBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set decorationLayout", () => {
    const newValue = "New String"
    widget.set("decorationLayout", newValue)
    expect(node.setDecorationLayout).toHaveBeenCalledWith(newValue)
  })

  test("should set showTitleButtons", () => {
    const newValue = true
    widget.set("showTitleButtons", newValue)
    expect(node.setShowTitleButtons).toHaveBeenCalledWith(newValue)
  })

  test("should set titleWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("titleWidget", newValue)
    expect(node.setTitleWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
