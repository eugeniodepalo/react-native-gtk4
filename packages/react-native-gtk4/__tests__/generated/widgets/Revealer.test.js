import { Revealer } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Revealer", () => {
  let widget

  beforeEach(() => {
    widget = new Revealer({})
  })

  test("should set revealChild", () => {
    const newValue = true
    widget.set("revealChild", newValue)
    expect(widget.node.setRevealChild).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionDuration", () => {
    const newValue = 1
    widget.set("transitionDuration", newValue)
    expect(widget.node.setTransitionDuration).toHaveBeenCalledWith(newValue)
  })

  test("should set transitionType", () => {
    const newValue = Gtk.RevealerTransitionType.NONE
    widget.set("transitionType", newValue)
    expect(widget.node.setTransitionType).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
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

  test("should connect onNotifyChildRevealed", () => {
    const callback = jest.fn()

    widget.set("onNotifyChildRevealed", callback)

    const handler = widget.handlers["notify::child-revealed"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child-revealed",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRevealChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealChild", callback)

    const handler = widget.handlers["notify::reveal-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::reveal-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransitionDuration", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionDuration", callback)

    const handler = widget.handlers["notify::transition-duration"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transition-duration",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTransitionType", () => {
    const callback = jest.fn()

    widget.set("onNotifyTransitionType", callback)

    const handler = widget.handlers["notify::transition-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::transition-type",
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
    const child = new Revealer()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new Revealer()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new Revealer()
    const sibling = new Revealer()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
