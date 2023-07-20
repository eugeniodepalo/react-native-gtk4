import { Stack } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Stack", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Stack.mockImplementation(() => node)
    node = new Gtk.Stack()
    widget = new Stack({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set hhomogeneous", () => {
    const newValue = true
    widget.set("hhomogeneous", newValue)
    expect(node.setHhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set interpolateSize", () => {
    const newValue = true
    widget.set("interpolateSize", newValue)
    expect(node.setInterpolateSize).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 42
    widget.set("transitionDuration", newValue)
    expect(node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Gtk.StackTransitionType.NONE
    widget.set("transitionType", newValue)
    expect(node.setTransitionType).toHaveBeenCalledWith(newValue)
  })

  test("should set vhomogeneous", () => {
    const newValue = true
    widget.set("vhomogeneous", newValue)
    expect(node.setVhomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("visibleChild", newValue)
    expect(node.setVisibleChild).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleChildName", () => {
    const newValue = "New String"
    widget.set("visibleChildName", newValue)
    expect(node.setVisibleChildName).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
