import { FlowBoxChild } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FlowBoxChild", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.FlowBoxChild.mockImplementation(() => node)
    node = new Gtk.FlowBoxChild()
    widget = new FlowBoxChild({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
