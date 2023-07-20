import { ShortcutsGroup } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsGroup", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ShortcutsGroup.mockImplementation(() => node)
    node = new Gtk.ShortcutsGroup()
    widget = new ShortcutsGroup({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accelSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("accelSizeGroup", newValue)
    expect(node.accelSizeGroup).toBe(newValue)
  })

  test("should set title", () => {
    const newValue = "New String"
    widget.set("title", newValue)
    expect(node.title).toBe(newValue)
  })

  test("should set titleSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("titleSizeGroup", newValue)
    expect(node.titleSizeGroup).toBe(newValue)
  })

  test("should set view", () => {
    const newValue = "New String"
    widget.set("view", newValue)
    expect(node.view).toBe(newValue)
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
