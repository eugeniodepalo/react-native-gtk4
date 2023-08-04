import { ScrolledWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ScrolledWindow", () => {
  let widget

  beforeEach(() => {
    widget = new ScrolledWindow({}, ScrolledWindow.createNode({}))
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(widget.node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollbarPolicy", () => {
    const newValue = Gtk.PolicyType.ALWAYS
    widget.set("hscrollbarPolicy", newValue)
    expect(widget.node.hscrollbarPolicy).toBe(newValue)
  })

  test("should set kineticScrolling", () => {
    const newValue = true
    widget.set("kineticScrolling", newValue)
    expect(widget.node.setKineticScrolling).toHaveBeenCalledWith(newValue)
  })

  test("should set maxContentHeight", () => {
    const newValue = 1
    widget.set("maxContentHeight", newValue)
    expect(widget.node.setMaxContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set maxContentWidth", () => {
    const newValue = 1
    widget.set("maxContentWidth", newValue)
    expect(widget.node.setMaxContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set minContentHeight", () => {
    const newValue = 1
    widget.set("minContentHeight", newValue)
    expect(widget.node.setMinContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set minContentWidth", () => {
    const newValue = 1
    widget.set("minContentWidth", newValue)
    expect(widget.node.setMinContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set overlayScrolling", () => {
    const newValue = true
    widget.set("overlayScrolling", newValue)
    expect(widget.node.setOverlayScrolling).toHaveBeenCalledWith(newValue)
  })

  test("should set propagateNaturalHeight", () => {
    const newValue = true
    widget.set("propagateNaturalHeight", newValue)
    expect(widget.node.setPropagateNaturalHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set propagateNaturalWidth", () => {
    const newValue = true
    widget.set("propagateNaturalWidth", newValue)
    expect(widget.node.setPropagateNaturalWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollbarPolicy", () => {
    const newValue = Gtk.PolicyType.ALWAYS
    widget.set("vscrollbarPolicy", newValue)
    expect(widget.node.vscrollbarPolicy).toBe(newValue)
  })

  test("should set windowPlacement", () => {
    const newValue = Gtk.CornerType.TOP_LEFT
    widget.set("windowPlacement", newValue)
    expect(widget.node.windowPlacement).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onEdgeOvershot", () => {
    const callback = jest.fn()

    widget.set("onEdgeOvershot", callback)

    const handler = widget.handlers["edge-overshot"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "edge-overshot",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onEdgeReached", () => {
    const callback = jest.fn()

    widget.set("onEdgeReached", callback)

    const handler = widget.handlers["edge-reached"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "edge-reached",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveFocusOut", () => {
    const callback = jest.fn()

    widget.set("onMoveFocusOut", callback)

    const handler = widget.handlers["move-focus-out"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-focus-out",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onScrollChild", () => {
    const callback = jest.fn()

    widget.set("onScrollChild", callback)

    const handler = widget.handlers["scroll-child"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "scroll-child",
      expect.any(Function)
    )
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

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyHadjustment", callback)

    const handler = widget.handlers["notify::hadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
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

  test("should connect onNotifyHscrollbarPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyHscrollbarPolicy", callback)

    const handler = widget.handlers["notify::hscrollbar-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hscrollbar-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyKineticScrolling", () => {
    const callback = jest.fn()

    widget.set("onNotifyKineticScrolling", callback)

    const handler = widget.handlers["notify::kinetic-scrolling"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::kinetic-scrolling",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxContentHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxContentHeight", callback)

    const handler = widget.handlers["notify::max-content-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-content-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxContentWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxContentWidth", callback)

    const handler = widget.handlers["notify::max-content-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-content-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinContentHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinContentHeight", callback)

    const handler = widget.handlers["notify::min-content-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-content-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinContentWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinContentWidth", callback)

    const handler = widget.handlers["notify::min-content-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-content-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyOverlayScrolling", () => {
    const callback = jest.fn()

    widget.set("onNotifyOverlayScrolling", callback)

    const handler = widget.handlers["notify::overlay-scrolling"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::overlay-scrolling",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPropagateNaturalHeight", () => {
    const callback = jest.fn()

    widget.set("onNotifyPropagateNaturalHeight", callback)

    const handler = widget.handlers["notify::propagate-natural-height"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::propagate-natural-height",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPropagateNaturalWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyPropagateNaturalWidth", callback)

    const handler = widget.handlers["notify::propagate-natural-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::propagate-natural-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyVadjustment", callback)

    const handler = widget.handlers["notify::vadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVscrollbarPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyVscrollbarPolicy", callback)

    const handler = widget.handlers["notify::vscrollbar-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vscrollbar-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWindowPlacement", () => {
    const callback = jest.fn()

    widget.set("onNotifyWindowPlacement", callback)

    const handler = widget.handlers["notify::window-placement"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::window-placement",
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
    const child = new ScrolledWindow()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new ScrolledWindow()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new ScrolledWindow()
    const sibling = new ScrolledWindow()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
