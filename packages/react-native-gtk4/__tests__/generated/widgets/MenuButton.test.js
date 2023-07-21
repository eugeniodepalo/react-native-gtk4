import { MenuButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("MenuButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.MenuButton()
    Gtk.MenuButton.mockImplementation(() => node)
    widget = new MenuButton({})
  })

  test("should set active", () => {
    const newValue = true
    widget.set("active", newValue)
    expect(node.setActive).toHaveBeenCalledWith(newValue)
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
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(node.setIconName).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "Some String"
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

  test("should connect onActivate", () => {
    const callback = jest.fn()
    widget.set("onActivate", callback)
    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActive", () => {
    const callback = jest.fn()
    widget.set("onNotifyActive", callback)
    const handler = widget.handlers["notify::active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::active", expect.any(Function))
  })

  test("should connect onNotifyAlwaysShowArrow", () => {
    const callback = jest.fn()
    widget.set("onNotifyAlwaysShowArrow", callback)
    const handler = widget.handlers["notify::always-show-arrow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::always-show-arrow",
      expect.any(Function)
    )
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()
    widget.set("onNotifyChild", callback)
    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::child", expect.any(Function))
  })

  test("should connect onNotifyDirection", () => {
    const callback = jest.fn()
    widget.set("onNotifyDirection", callback)
    const handler = widget.handlers["notify::direction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::direction",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasFrame", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasFrame", callback)
    const handler = widget.handlers["notify::has-frame"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-frame",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn()
    widget.set("onNotifyIconName", callback)
    const handler = widget.handlers["notify::icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn()
    widget.set("onNotifyLabel", callback)
    const handler = widget.handlers["notify::label"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::label", expect.any(Function))
  })

  test("should connect onNotifyMenuModel", () => {
    const callback = jest.fn()
    widget.set("onNotifyMenuModel", callback)
    const handler = widget.handlers["notify::menu-model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::menu-model",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPopover", () => {
    const callback = jest.fn()
    widget.set("onNotifyPopover", callback)
    const handler = widget.handlers["notify::popover"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::popover",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimary", () => {
    const callback = jest.fn()
    widget.set("onNotifyPrimary", callback)
    const handler = widget.handlers["notify::primary"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::primary",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseUnderline", callback)
    const handler = widget.handlers["notify::use-underline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-underline",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()
    widget.set("onNotifyAccessibleRole", callback)
    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
