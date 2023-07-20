import { ProgressBar } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gtk from "@girs/node-gtk-4.0"

describe("ProgressBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ProgressBar.mockImplementation(() => node)
    node = new Gtk.ProgressBar()
    widget = new ProgressBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set ellipsize", () => {
    const newValue = Pango.EllipsizeMode.NONE
    widget.set("ellipsize", newValue)
    expect(node.setEllipsize).toHaveBeenCalledWith(newValue)
  })

  test("should set fraction", () => {
    const newValue = 42
    widget.set("fraction", newValue)
    expect(node.setFraction).toHaveBeenCalledWith(newValue)
  })

  test("should set inverted", () => {
    const newValue = true
    widget.set("inverted", newValue)
    expect(node.setInverted).toHaveBeenCalledWith(newValue)
  })

  test("should set pulseStep", () => {
    const newValue = 42
    widget.set("pulseStep", newValue)
    expect(node.setPulseStep).toHaveBeenCalledWith(newValue)
  })

  test("should set showText", () => {
    const newValue = true
    widget.set("showText", newValue)
    expect(node.setShowText).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "New String"
    widget.set("text", newValue)
    expect(node.setText).toHaveBeenCalledWith(newValue)
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
