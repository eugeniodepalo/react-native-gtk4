import { ShortcutsGroup } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ShortcutsGroup", () => {
  let widget

  beforeEach(() => {
    widget = new ShortcutsGroup({})
  })

  test("should set accelSizeGroup", () => {
    const newValue = new Gtk.SizeGroup()
    widget.set("accelSizeGroup", newValue)
    expect(widget.node.accelSizeGroup).toBe(newValue)
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

  test("should set view", () => {
    const newValue = "Some String"
    widget.set("view", newValue)
    expect(widget.node.view).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyHeight", callback)

    const handler = widget.handlers["notify::height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::height",
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

  test("should connect onNotifyView", () => {
    const callback = jest.fn()

    widget.set("onNotifyView", callback)

    const handler = widget.handlers["notify::view"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::view",
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()

    widget.set("onNotifyOrientation", callback)

    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    )
  })
})
