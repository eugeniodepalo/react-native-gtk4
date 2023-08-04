import { Popover } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Popover", () => {
  let widget

  beforeEach(() => {
    widget = new Popover({}, Popover.createNode({}))
  })

  test("should set autohide", () => {
    const newValue = true
    widget.set("autohide", newValue)
    expect(widget.node.setAutohide).toHaveBeenCalledWith(newValue)
  })

  test("should set cascadePopdown", () => {
    const newValue = true
    widget.set("cascadePopdown", newValue)
    expect(widget.node.setCascadePopdown).toHaveBeenCalledWith(newValue)
  })

  test("should set defaultWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("defaultWidget", newValue)
    expect(widget.node.setDefaultWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set hasArrow", () => {
    const newValue = true
    widget.set("hasArrow", newValue)
    expect(widget.node.setHasArrow).toHaveBeenCalledWith(newValue)
  })

  test("should set mnemonicsVisible", () => {
    const newValue = true
    widget.set("mnemonicsVisible", newValue)
    expect(widget.node.setMnemonicsVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set pointingTo", () => {
    const newValue = new Gdk.Rectangle()
    widget.set("pointingTo", newValue)
    expect(widget.node.setPointingTo).toHaveBeenCalledWith(newValue)
  })

  test("should set position", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("position", newValue)
    expect(widget.node.setPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivateDefault", () => {
    const callback = jest.fn()

    widget.set("onActivateDefault", callback)

    const handler = widget.handlers["activate-default"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-default",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onClosed", () => {
    const callback = jest.fn()

    widget.set("onClosed", callback)

    const handler = widget.handlers["closed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("closed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAutohide", () => {
    const callback = jest.fn()

    widget.set("onNotifyAutohide", callback)

    const handler = widget.handlers["notify::autohide"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::autohide",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCascadePopdown", () => {
    const callback = jest.fn()

    widget.set("onNotifyCascadePopdown", callback)

    const handler = widget.handlers["notify::cascade-popdown"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cascade-popdown",
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

  test("should connect onNotifyDefaultWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyDefaultWidget", callback)

    const handler = widget.handlers["notify::default-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::default-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasArrow", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasArrow", callback)

    const handler = widget.handlers["notify::has-arrow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-arrow",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMnemonicsVisible", () => {
    const callback = jest.fn()

    widget.set("onNotifyMnemonicsVisible", callback)

    const handler = widget.handlers["notify::mnemonics-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::mnemonics-visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPointingTo", () => {
    const callback = jest.fn()

    widget.set("onNotifyPointingTo", callback)

    const handler = widget.handlers["notify::pointing-to"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pointing-to",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyPosition", callback)

    const handler = widget.handlers["notify::position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::position",
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

  test("should append child", () => {
    const child = new Popover()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new Popover()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new Popover()
    const sibling = new Popover()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
