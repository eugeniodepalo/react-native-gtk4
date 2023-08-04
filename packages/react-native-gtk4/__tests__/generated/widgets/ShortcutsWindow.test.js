import { ShortcutsWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsWindow", () => {
  let widget

  beforeEach(() => {
    widget = new ShortcutsWindow({}, ShortcutsWindow.createNode({}))
  })

  test("should set sectionName", () => {
    const newValue = "Some String"
    widget.set("sectionName", newValue)
    expect(widget.node.sectionName).toBe(newValue)
  })

  test("should set viewName", () => {
    const newValue = "Some String"
    widget.set("viewName", newValue)
    expect(widget.node.viewName).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onClose", () => {
    const callback = jest.fn()

    widget.set("onClose", callback)

    const handler = widget.handlers["close"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("close", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSearch", () => {
    const callback = jest.fn()

    widget.set("onSearch", callback)

    const handler = widget.handlers["search"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("search", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifySectionName", () => {
    const callback = jest.fn()

    widget.set("onNotifySectionName", callback)

    const handler = widget.handlers["notify::section-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::section-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyViewName", () => {
    const callback = jest.fn()

    widget.set("onNotifyViewName", callback)

    const handler = widget.handlers["notify::view-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::view-name",
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
