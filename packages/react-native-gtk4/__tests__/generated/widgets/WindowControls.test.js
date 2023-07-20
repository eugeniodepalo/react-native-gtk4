import { WindowControls } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("WindowControls", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.WindowControls.mockImplementation(() => node)
    node = new Gtk.WindowControls()
    widget = new WindowControls({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set decorationLayout", () => {
    const newValue = "New String"
    widget.set("decorationLayout", newValue)
    expect(node.setDecorationLayout).toHaveBeenCalledWith(newValue)
  })

  test("should set side", () => {
    const newValue = Gtk.PackType.START
    widget.set("side", newValue)
    expect(node.setSide).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
