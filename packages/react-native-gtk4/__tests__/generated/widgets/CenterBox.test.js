import { CenterBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("CenterBox", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.CenterBox.mockImplementation(() => node)
    node = new Gtk.CenterBox()
    widget = new CenterBox({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set baselinePosition", () => {
    const newValue = Gtk.BaselinePosition.TOP
    widget.set("baselinePosition", newValue)
    expect(node.setBaselinePosition).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })
})
