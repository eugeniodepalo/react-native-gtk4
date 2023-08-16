import { ListBoxRow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"

describe("ListBoxRow", () => {
  let widget

  beforeEach(() => {
    widget = new ListBoxRow({}, ListBoxRow.createNode({}))
  })

  test("should set activatable", () => {
    const newValue = true
    widget.set("activatable", newValue)
    expect(widget.node.setActivatable).toHaveBeenCalledWith(newValue)
  })

  test("should set selectable", () => {
    const newValue = true
    widget.set("selectable", newValue)
    expect(widget.node.setSelectable).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyActivatable", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivatable", callback)

    const handler = widget.handlers["notify::activatable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activatable",
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

  test("should connect onNotifySelectable", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectable", callback)

    const handler = widget.handlers["notify::selectable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectable",
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
    const child = new ListBoxRow()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new ListBoxRow()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new ListBoxRow()
    const sibling = new ListBoxRow()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
