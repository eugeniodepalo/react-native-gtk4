import { PopoverMenu } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("PopoverMenu", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.PopoverMenu.mockImplementation(() => node)
    node = new Gtk.PopoverMenu()
    widget = new PopoverMenu({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set menuModel", () => {
    const newValue = new Gio.MenuModel()
    widget.set("menuModel", newValue)
    expect(node.setMenuModel).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleSubmenu", () => {
    const newValue = "New String"
    widget.set("visibleSubmenu", newValue)
    expect(node.visibleSubmenu).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
