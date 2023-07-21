import { ShortcutsSection } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsSection", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ShortcutsSection()
    Gtk.ShortcutsSection.mockImplementation(() => node)
    widget = new ShortcutsSection({})
  })

  test("should set maxHeight", () => {
    const newValue = 1
    widget.set("maxHeight", newValue)
    expect(node.maxHeight).toBe(newValue)
  })

  test("should set sectionName", () => {
    const newValue = "Some String"
    widget.set("sectionName", newValue)
    expect(node.sectionName).toBe(newValue)
  })

  test("should set title", () => {
    const newValue = "Some String"
    widget.set("title", newValue)
    expect(node.title).toBe(newValue)
  })

  test("should set viewName", () => {
    const newValue = "Some String"
    widget.set("viewName", newValue)
    expect(node.viewName).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onChangeCurrentPage", () => {
    const callback = jest.fn()
    widget.set("onChangeCurrentPage", callback)
    const handler = widget.handlers["change-current-page"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "change-current-page",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyMaxHeight", () => {
    const callback = jest.fn()
    widget.set("onNotifyMaxHeight", callback)
    const handler = widget.handlers["notify::max-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::max-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifySectionName", () => {
    const callback = jest.fn()
    widget.set("onNotifySectionName", callback)
    const handler = widget.handlers["notify::section-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::section-name",
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
    expect(node.on).toHaveBeenCalledWith("notify::title", expect.any(Function))
  })

  test("should connect onNotifyViewName", () => {
    const callback = jest.fn()
    widget.set("onNotifyViewName", callback)
    const handler = widget.handlers["notify::view-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()
    widget.set("onNotifyOrientation", callback)
    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    )
  })
})
