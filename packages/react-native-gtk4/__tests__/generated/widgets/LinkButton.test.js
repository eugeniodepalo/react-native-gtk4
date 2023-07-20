import { LinkButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("LinkButton", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.LinkButton.mockImplementation(() => node)
    node = new Gtk.LinkButton()
    widget = new LinkButton({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set uri", () => {
    const newValue = "New String"
    widget.set("uri", newValue)
    expect(node.setUri).toHaveBeenCalledWith(newValue)
  })

  test("should set visited", () => {
    const newValue = true
    widget.set("visited", newValue)
    expect(node.setVisited).toHaveBeenCalledWith(newValue)
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
