import { PopoverMenu } from "@/generated/widgets.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gio from "@/generated/girs/node-gio-2.0.js"

describe("PopoverMenu", () => {
  let widget: PopoverMenu

  beforeEach(() => {
    widget = new PopoverMenu({}, PopoverMenu.createNode())
  })

  test("should set flags", () => {
    const newValue = Gtk.PopoverMenuFlags.SLIDING
    widget.set("flags", newValue)
    expect(widget.node.setFlags).toHaveBeenCalledWith(newValue)
  })

  test("should set menuModel", () => {
    const newValue = undefined
    widget.set("menuModel", newValue)
    expect(widget.node.setMenuModel).toHaveBeenCalledWith(newValue)
  })

  test("should set visibleSubmenu", () => {
    const newValue = "Some String"
    widget.set("visibleSubmenu", newValue)
    expect(widget.node.visibleSubmenu).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyFlags", () => {
    const callback = jest.fn()

    widget.set("onNotifyFlags", callback)

    const handler = widget.handlers["notify::flags"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::flags",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMenuModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyMenuModel", callback)

    const handler = widget.handlers["notify::menu-model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::menu-model",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVisibleSubmenu", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibleSubmenu", callback)

    const handler = widget.handlers["notify::visible-submenu"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visible-submenu",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
