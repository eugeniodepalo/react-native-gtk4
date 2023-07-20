import { MenuButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("MenuButton", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.MenuButton.mockImplementation(() => node)
    node = new Gtk.MenuButton()
    widget = new MenuButton({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set alwaysShowArrow", () => {
    const newValue = true
    widget.set("alwaysShowArrow", newValue)
    expect(node.setAlwaysShowArrow).toHaveBeenCalledWith(newValue)
  })

  test("should set direction", () => {
    const newValue = Gtk.ArrowType.UP
    widget.set("direction", newValue)
    expect(node.setDirection).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "New String"
    widget.set("iconName", newValue)
    expect(node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "New String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set menuModel", () => {
    const newValue = new Gio.MenuModel()
    widget.set("menuModel", newValue)
    expect(node.setMenuModel).toHaveBeenCalledWith(newValue)
  })

  test("should set popover", () => {
    const newValue = new Gtk.Popover()
    widget.set("popover", newValue)
    expect(node.setPopover).toHaveBeenCalledWith(newValue)
  })

  test("should set primary", () => {
    const newValue = true
    widget.set("primary", newValue)
    expect(node.setPrimary).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
