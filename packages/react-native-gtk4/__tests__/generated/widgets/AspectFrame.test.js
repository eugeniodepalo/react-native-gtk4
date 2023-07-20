import { AspectFrame } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AspectFrame", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.AspectFrame.mockImplementation(() => node)
    node = new Gtk.AspectFrame()
    widget = new AspectFrame({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set obeyChild", () => {
    const newValue = true
    widget.set("obeyChild", newValue)
    expect(node.setObeyChild).toHaveBeenCalledWith(newValue)
  })

  test("should set ratio", () => {
    const newValue = 42
    widget.set("ratio", newValue)
    expect(node.setRatio).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 42
    widget.set("xalign", newValue)
    expect(node.setXalign).toHaveBeenCalledWith(newValue)
  })

  test("should set yalign", () => {
    const newValue = 42
    widget.set("yalign", newValue)
    expect(node.setYalign).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
