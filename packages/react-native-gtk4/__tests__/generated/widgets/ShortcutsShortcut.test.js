import { ShortcutsShortcut } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("ShortcutsShortcut", () => {
  let widget

  beforeEach(() => {
    widget = new ShortcutsShortcut({})
  })

  test("should set accelSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("accelSizeGroup", newValue)
    expect(widget.node.accelSizeGroup).toBe(newValue)
  })

  test("should set accelerator", () => {
    const newValue = "Some String"
    widget.set("accelerator", newValue)
    expect(widget.node.accelerator).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(widget.node.actionName).toBe(newValue)
  })

  test("should set direction", () => {
    const newValue = Gtk.TextDirection.NONE
    widget.set("direction", newValue)
    expect(widget.node.direction).toBe(newValue)
  })

  test("should set icon", () => {
    const newValue = new Gio.Icon()
    widget.set("icon", newValue)
    expect(widget.node.icon).toBe(newValue)
  })

  test("should set iconSet", () => {
    const newValue = true
    widget.set("iconSet", newValue)
    expect(widget.node.iconSet).toBe(newValue)
  })

  test("should set shortcutType", () => {
    const newValue = Gtk.ShortcutType.ACCELERATOR
    widget.set("shortcutType", newValue)
    expect(widget.node.shortcutType).toBe(newValue)
  })

  test("should set subtitle", () => {
    const newValue = "Some String"
    widget.set("subtitle", newValue)
    expect(widget.node.subtitle).toBe(newValue)
  })

  test("should set subtitleSet", () => {
    const newValue = true
    widget.set("subtitleSet", newValue)
    expect(widget.node.subtitleSet).toBe(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(widget.node.title).toBe(newValue)
  })

  test("should set titleSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("titleSizeGroup", newValue)
    expect(widget.node.titleSizeGroup).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyAccelSizeGroup", () => {
    const callback = jest.fn()

    widget.set("onNotifyAccelSizeGroup", callback)

    const handler = widget.handlers["notify::accel-size-group"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accel-size-group",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccelerator", () => {
    const callback = jest.fn()

    widget.set("onNotifyAccelerator", callback)

    const handler = widget.handlers["notify::accelerator"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accelerator",
      expect.any(Function)
    )
  })

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn()

    widget.set("onNotifyActionName", callback)

    const handler = widget.handlers["notify::action-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::action-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDirection", () => {
    const callback = jest.fn()

    widget.set("onNotifyDirection", callback)

    const handler = widget.handlers["notify::direction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::direction",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIcon", () => {
    const callback = jest.fn()

    widget.set("onNotifyIcon", callback)

    const handler = widget.handlers["notify::icon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::icon",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIconSet", () => {
    const callback = jest.fn()

    widget.set("onNotifyIconSet", callback)

    const handler = widget.handlers["notify::icon-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::icon-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShortcutType", () => {
    const callback = jest.fn()

    widget.set("onNotifyShortcutType", callback)

    const handler = widget.handlers["notify::shortcut-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shortcut-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifySubtitle", () => {
    const callback = jest.fn()

    widget.set("onNotifySubtitle", callback)

    const handler = widget.handlers["notify::subtitle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::subtitle",
      expect.any(Function)
    )
  })

  test("should connect onNotifySubtitleSet", () => {
    const callback = jest.fn()

    widget.set("onNotifySubtitleSet", callback)

    const handler = widget.handlers["notify::subtitle-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::subtitle-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTitle", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitle", callback)

    const handler = widget.handlers["notify::title"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTitleSizeGroup", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitleSizeGroup", callback)

    const handler = widget.handlers["notify::title-size-group"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title-size-group",
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
