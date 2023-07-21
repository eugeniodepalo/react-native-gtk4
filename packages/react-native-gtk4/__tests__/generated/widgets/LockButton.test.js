import { LockButton } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("LockButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.LockButton()
    Gtk.LockButton.mockImplementation(() => node)
    widget = new LockButton({})
  })

  test("should set permission", () => {
    const newValue = new Gio.Permission()
    widget.set("permission", newValue)
    expect(node.setPermission).toHaveBeenCalledWith(newValue)
  })

  test("should set textLock", () => {
    const newValue = "Some String"
    widget.set("textLock", newValue)
    expect(node.textLock).toBe(newValue)
  })

  test("should set textUnlock", () => {
    const newValue = "Some String"
    widget.set("textUnlock", newValue)
    expect(node.textUnlock).toBe(newValue)
  })

  test("should set tooltipLock", () => {
    const newValue = "Some String"
    widget.set("tooltipLock", newValue)
    expect(node.tooltipLock).toBe(newValue)
  })

  test("should set tooltipNotAuthorized", () => {
    const newValue = "Some String"
    widget.set("tooltipNotAuthorized", newValue)
    expect(node.tooltipNotAuthorized).toBe(newValue)
  })

  test("should set tooltipUnlock", () => {
    const newValue = "Some String"
    widget.set("tooltipUnlock", newValue)
    expect(node.tooltipUnlock).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = new GLib.Variant()
    widget.set("actionTarget", newValue)
    expect(node.actionTarget).toBe(newValue)
  })

  test("should connect onNotifyPermission", () => {
    const callback = jest.fn()
    widget.set("onNotifyPermission", callback)
    const handler = widget.handlers["notify::permission"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::permission",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextLock", () => {
    const callback = jest.fn()
    widget.set("onNotifyTextLock", callback)
    const handler = widget.handlers["notify::text-lock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::text-lock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTextUnlock", () => {
    const callback = jest.fn()
    widget.set("onNotifyTextUnlock", callback)
    const handler = widget.handlers["notify::text-unlock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::text-unlock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipLock", () => {
    const callback = jest.fn()
    widget.set("onNotifyTooltipLock", callback)
    const handler = widget.handlers["notify::tooltip-lock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tooltip-lock",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipNotAuthorized", () => {
    const callback = jest.fn()
    widget.set("onNotifyTooltipNotAuthorized", callback)
    const handler = widget.handlers["notify::tooltip-not-authorized"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tooltip-not-authorized",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTooltipUnlock", () => {
    const callback = jest.fn()
    widget.set("onNotifyTooltipUnlock", callback)
    const handler = widget.handlers["notify::tooltip-unlock"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::tooltip-unlock",
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

  test("should connect onNotifyActionName", () => {
    const callback = jest.fn()
    widget.set("onNotifyActionName", callback)
    const handler = widget.handlers["notify::action-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::action-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyActionTarget", () => {
    const callback = jest.fn()
    widget.set("onNotifyActionTarget", callback)
    const handler = widget.handlers["notify::action-target"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::action-target",
      expect.any(Function)
    )
  })
})
