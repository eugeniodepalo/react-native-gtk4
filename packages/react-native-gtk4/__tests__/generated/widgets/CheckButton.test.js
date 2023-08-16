import { CheckButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("CheckButton", () => {
  let widget

  beforeEach(() => {
    widget = new CheckButton({}, CheckButton.createNode({}))
  })

  test("should set active", () => {
    const newValue = true
    widget.set("active", newValue)
    expect(widget.node.setActive).toHaveBeenCalledWith(newValue)
  })

  test("should set group", () => {
    const newValue = new Gtk.CheckButton()
    widget.set("group", newValue)
    expect(widget.node.setGroup).toHaveBeenCalledWith(newValue)
  })

  test("should set inconsistent", () => {
    const newValue = true
    widget.set("inconsistent", newValue)
    expect(widget.node.setInconsistent).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "Some String"
    widget.set("label", newValue)
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set actionName", () => {
    const newValue = "Some String"
    widget.set("actionName", newValue)
    expect(widget.node.setActionName).toHaveBeenCalledWith(newValue)
  })

  test("should set actionTarget", () => {
    const newValue = new GLib.Variant()
    widget.set("actionTarget", newValue)
    expect(widget.node.setActionTargetValue).toHaveBeenCalledWith(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggled", () => {
    const callback = jest.fn()

    widget.set("onToggled", callback)

    const handler = widget.handlers["toggled"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("toggled", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActive", () => {
    const callback = jest.fn()

    widget.set("onNotifyActive", callback)

    const handler = widget.handlers["notify::active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::active",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyGroup", () => {
    const callback = jest.fn()

    widget.set("onNotifyGroup", callback)

    const handler = widget.handlers["notify::group"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::group",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInconsistent", () => {
    const callback = jest.fn()

    widget.set("onNotifyInconsistent", callback)

    const handler = widget.handlers["notify::inconsistent"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::inconsistent",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label",
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::action-target",
      expect.any(Function)
    )
  })

  test("should append child", () => {
    const child = new CheckButton()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new CheckButton()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new CheckButton()
    const sibling = new CheckButton()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
