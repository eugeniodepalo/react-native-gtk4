import { ListBoxRow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("ListBoxRow", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ListBoxRow.mockImplementation(() => node)
    node = new Gtk.ListBoxRow()
    widget = new ListBoxRow({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set activatable", () => {
    const newValue = true
    widget.set("activatable", newValue)
    expect(node.setActivatable).toHaveBeenCalledWith(newValue)
  })

  test("should set selectable", () => {
    const newValue = true
    widget.set("selectable", newValue)
    expect(node.setSelectable).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "New String"
    widget.set("actionName", newValue)
    expect(node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = new GLib.Variant()
    widget.set("actionTarget", newValue)
    expect(node.actionTarget).toBe(newValue)
  })
})
