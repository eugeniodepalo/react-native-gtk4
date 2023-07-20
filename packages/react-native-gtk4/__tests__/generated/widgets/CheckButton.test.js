import { CheckButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("CheckButton", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.CheckButton.mockImplementation(() => node)
    node = new Gtk.CheckButton()
    widget = new CheckButton({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set active", () => {
    const newValue = true
    widget.set("active", newValue)
    expect(node.setActive).toHaveBeenCalledWith(newValue)
  })

  test("should set group", () => {
    const newValue = new Gtk.CheckButton()
    widget.set("group", newValue)
    expect(node.setGroup).toHaveBeenCalledWith(newValue)
  })

  test("should set inconsistent", () => {
    const newValue = true
    widget.set("inconsistent", newValue)
    expect(node.setInconsistent).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "New String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
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
