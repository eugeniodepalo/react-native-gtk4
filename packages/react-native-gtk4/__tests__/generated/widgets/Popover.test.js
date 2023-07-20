import { Popover } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Popover", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Popover.mockImplementation(() => node)
    node = new Gtk.Popover()
    widget = new Popover({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set autohide", () => {
    const newValue = true
    widget.set("autohide", newValue)
    expect(node.setAutohide).toHaveBeenCalledWith(newValue)
  })

  test("should set cascadePopdown", () => {
    const newValue = true
    widget.set("cascadePopdown", newValue)
    expect(node.setCascadePopdown).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("defaultWidget", newValue)
    expect(node.setDefaultWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set hasArrow", () => {
    const newValue = true
    widget.set("hasArrow", newValue)
    expect(node.setHasArrow).toHaveBeenCalledWith(newValue)
  })

  test("should set mnemonicsVisible", () => {
    const newValue = true
    widget.set("mnemonicsVisible", newValue)
    expect(node.setMnemonicsVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set pointingTo", () => {
    const newValue = new Gdk.Rectangle()
    widget.set("pointingTo", newValue)
    expect(node.setPointingTo).toHaveBeenCalledWith(newValue)
  })

  test("should set position", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("position", newValue)
    expect(node.setPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
