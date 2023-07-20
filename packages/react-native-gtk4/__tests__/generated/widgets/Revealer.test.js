import { Revealer } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Revealer", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Revealer.mockImplementation(() => node)
    node = new Gtk.Revealer()
    widget = new Revealer({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set revealChild", () => {
    const newValue = true
    widget.set("revealChild", newValue)
    expect(node.setRevealChild).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 42
    widget.set("transitionDuration", newValue)
    expect(node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Gtk.RevealerTransitionType.NONE
    widget.set("transitionType", newValue)
    expect(node.setTransitionType).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
