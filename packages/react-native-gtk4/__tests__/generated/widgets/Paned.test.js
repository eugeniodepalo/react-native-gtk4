import { Paned } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Paned", () => {
  let widget

  beforeEach(() => {
    widget = new Paned({}, Paned.createNode({}))
  })

  test("should set endChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("endChild", newValue)
    expect(widget.node.setEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set position", () => {
    const newValue = 1
    widget.set("position", newValue)
    expect(widget.node.setPosition).toHaveBeenCalledWith(newValue)
  })

  test("should set positionSet", () => {
    const newValue = true
    widget.set("positionSet", newValue)
    expect(widget.node.positionSet).toBe(newValue)
  })

  test("should set resizeEndChild", () => {
    const newValue = true
    widget.set("resizeEndChild", newValue)
    expect(widget.node.setResizeEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set resizeStartChild", () => {
    const newValue = true
    widget.set("resizeStartChild", newValue)
    expect(widget.node.setResizeStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set shrinkEndChild", () => {
    const newValue = true
    widget.set("shrinkEndChild", newValue)
    expect(widget.node.setShrinkEndChild).toHaveBeenCalledWith(newValue)
  })

  test("should set shrinkStartChild", () => {
    const newValue = true
    widget.set("shrinkStartChild", newValue)
    expect(widget.node.setShrinkStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set startChild", () => {
    const newValue = new Gtk.Widget()
    widget.set("startChild", newValue)
    expect(widget.node.setStartChild).toHaveBeenCalledWith(newValue)
  })

  test("should set wideHandle", () => {
    const newValue = true
    widget.set("wideHandle", newValue)
    expect(widget.node.setWideHandle).toHaveBeenCalledWith(newValue)
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

  test("should connect onAcceptPosition", () => {
    const callback = jest.fn()

    widget.set("onAcceptPosition", callback)

    const handler = widget.handlers["accept-position"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "accept-position",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCancelPosition", () => {
    const callback = jest.fn()

    widget.set("onCancelPosition", callback)

    const handler = widget.handlers["cancel-position"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "cancel-position",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCycleChildFocus", () => {
    const callback = jest.fn()

    widget.set("onCycleChildFocus", callback)

    const handler = widget.handlers["cycle-child-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "cycle-child-focus",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCycleHandleFocus", () => {
    const callback = jest.fn()

    widget.set("onCycleHandleFocus", callback)

    const handler = widget.handlers["cycle-handle-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "cycle-handle-focus",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveHandle", () => {
    const callback = jest.fn()

    widget.set("onMoveHandle", callback)

    const handler = widget.handlers["move-handle"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-handle",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleHandleFocus", () => {
    const callback = jest.fn()

    widget.set("onToggleHandleFocus", callback)

    const handler = widget.handlers["toggle-handle-focus"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-handle-focus",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyEndChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyEndChild", callback)

    const handler = widget.handlers["notify::end-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::end-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxPosition", callback)

    const handler = widget.handlers["notify::max-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-position",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinPosition", callback)

    const handler = widget.handlers["notify::min-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-position",
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

  test("should connect onNotifyPositionSet", () => {
    const callback = jest.fn()

    widget.set("onNotifyPositionSet", callback)

    const handler = widget.handlers["notify::position-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::position-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyResizeEndChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyResizeEndChild", callback)

    const handler = widget.handlers["notify::resize-end-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::resize-end-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyResizeStartChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyResizeStartChild", callback)

    const handler = widget.handlers["notify::resize-start-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::resize-start-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShrinkEndChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyShrinkEndChild", callback)

    const handler = widget.handlers["notify::shrink-end-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shrink-end-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShrinkStartChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyShrinkStartChild", callback)

    const handler = widget.handlers["notify::shrink-start-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shrink-start-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyStartChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyStartChild", callback)

    const handler = widget.handlers["notify::start-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::start-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWideHandle", () => {
    const callback = jest.fn()

    widget.set("onNotifyWideHandle", callback)

    const handler = widget.handlers["notify::wide-handle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wide-handle",
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
