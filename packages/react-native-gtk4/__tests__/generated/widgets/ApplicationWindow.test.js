import { ApplicationWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ApplicationWindow", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ApplicationWindow.mockImplementation(() => node)
    node = new Gtk.ApplicationWindow()
    widget = new ApplicationWindow({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set showMenubar", () => {
    const newValue = true
    widget.set("showMenubar", newValue)
    expect(node.setShowMenubar).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
