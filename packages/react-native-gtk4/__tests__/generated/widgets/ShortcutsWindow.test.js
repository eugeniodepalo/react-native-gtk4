import { ShortcutsWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsWindow", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ShortcutsWindow.mockImplementation(() => node)
    node = new Gtk.ShortcutsWindow()
    widget = new ShortcutsWindow({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set sectionName", () => {
    const newValue = "New String"
    widget.set("sectionName", newValue)
    expect(node.sectionName).toBe(newValue)
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
})
