import { PopoverMenuBar } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("PopoverMenuBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.PopoverMenuBar.mockImplementation(() => node)
    node = new Gtk.PopoverMenuBar()
    widget = new PopoverMenuBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set menuModel", () => {
    const newValue = new Gio.MenuModel()
    widget.set("menuModel", newValue)
    expect(node.setMenuModel).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
