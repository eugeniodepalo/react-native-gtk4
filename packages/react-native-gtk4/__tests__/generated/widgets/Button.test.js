import { Button } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("Button", () => {
  let widget

  beforeEach(() => {
    widget = new Button({})
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(widget.node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.setIconName).toHaveBeenCalledWith(newValue)
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
    expect(widget.node.actionTarget).toBe(newValue)
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

  test("should connect onClicked", () => {
    const callback = jest.fn()

    widget.set("onClicked", callback)

    const handler = widget.handlers["clicked"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("clicked", expect.any(Function))
    expect(callback).toHaveBeenCalled()
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

  test("should connect onNotifyHasFrame", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasFrame", callback)

    const handler = widget.handlers["notify::has-frame"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
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
    const child = new Button()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new Button()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new Button()
    const sibling = new Button()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
