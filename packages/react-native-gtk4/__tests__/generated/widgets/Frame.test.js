import { Frame } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Frame", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Frame.mockImplementation(() => node)
    node = new Gtk.Frame()
    widget = new Frame({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set label", () => {
    const newValue = "New String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("labelWidget", newValue)
    expect(node.setLabelWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set labelXalign", () => {
    const newValue = 42
    widget.set("labelXalign", newValue)
    expect(node.labelXalign).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
