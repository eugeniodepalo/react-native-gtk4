import { ShortcutsSection } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsSection", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ShortcutsSection.mockImplementation(() => node)
    node = new Gtk.ShortcutsSection()
    widget = new ShortcutsSection({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set maxHeight", () => {
    const newValue = 42
    widget.set("maxHeight", newValue)
    expect(node.maxHeight).toBe(newValue)
  })

  test("should set sectionName", () => {
    const newValue = "New String"
    widget.set("sectionName", newValue)
    expect(node.sectionName).toBe(newValue)
  })

  test("should set title", () => {
    const newValue = "New String"
    widget.set("title", newValue)
    expect(node.title).toBe(newValue)
  })

  test("should set viewName", () => {
    const newValue = "New String"
    widget.set("viewName", newValue)
    expect(node.viewName).toBe(newValue)
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
