import { ShortcutLabel } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutLabel", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ShortcutLabel.mockImplementation(() => node)
    node = new Gtk.ShortcutLabel()
    widget = new ShortcutLabel({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accelerator", () => {
    const newValue = "New String"
    widget.set("accelerator", newValue)
    expect(node.setAccelerator).toHaveBeenCalledWith(newValue)
  })

  test("should set disabledText", () => {
    const newValue = "New String"
    widget.set("disabledText", newValue)
    expect(node.setDisabledText).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
