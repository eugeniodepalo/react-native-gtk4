import { GLArea } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("GLArea", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.GLArea.mockImplementation(() => node)
    node = new Gtk.GLArea()
    widget = new GLArea({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set autoRender", () => {
    const newValue = true
    widget.set("autoRender", newValue)
    expect(node.setAutoRender).toHaveBeenCalledWith(newValue)
  })

  test("should set hasDepthBuffer", () => {
    const newValue = true
    widget.set("hasDepthBuffer", newValue)
    expect(node.setHasDepthBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set hasStencilBuffer", () => {
    const newValue = true
    widget.set("hasStencilBuffer", newValue)
    expect(node.setHasStencilBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set useEs", () => {
    const newValue = true
    widget.set("useEs", newValue)
    expect(node.setUseEs).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
