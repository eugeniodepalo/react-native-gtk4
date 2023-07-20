import { Spinner } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Spinner", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Spinner.mockImplementation(() => node)
    node = new Gtk.Spinner()
    widget = new Spinner({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set spinning", () => {
    const newValue = true
    widget.set("spinning", newValue)
    expect(node.setSpinning).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
