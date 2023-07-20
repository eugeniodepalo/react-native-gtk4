import { ShortcutsShortcut } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("ShortcutsShortcut", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ShortcutsShortcut.mockImplementation(() => node)
    node = new Gtk.ShortcutsShortcut()
    widget = new ShortcutsShortcut({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accelSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("accelSizeGroup", newValue)
    expect(node.accelSizeGroup).toBe(newValue)
  })

  test("should set accelerator", () => {
    const newValue = "New String"
    widget.set("accelerator", newValue)
    expect(node.accelerator).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "New String"
    widget.set("actionName", newValue)
    expect(node.actionName).toBe(newValue)
  })

  test("should set direction", () => {
    const newValue = Gtk.TextDirection.NONE
    widget.set("direction", newValue)
    expect(node.direction).toBe(newValue)
  })

  test("should set icon", () => {
    const newValue = new Gio.Icon()
    widget.set("icon", newValue)
    expect(node.icon).toBe(newValue)
  })

  test("should set iconSet", () => {
    const newValue = true
    widget.set("iconSet", newValue)
    expect(node.iconSet).toBe(newValue)
  })

  test("should set shortcutType", () => {
    const newValue = Gtk.ShortcutType.ACCELERATOR
    widget.set("shortcutType", newValue)
    expect(node.shortcutType).toBe(newValue)
  })

  test("should set subtitle", () => {
    const newValue = "New String"
    widget.set("subtitle", newValue)
    expect(node.subtitle).toBe(newValue)
  })

  test("should set subtitleSet", () => {
    const newValue = true
    widget.set("subtitleSet", newValue)
    expect(node.subtitleSet).toBe(newValue)
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

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
