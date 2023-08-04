import { WindowControls } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("WindowControls", () => {
  let widget

  beforeEach(() => {
    widget = new WindowControls({}, WindowControls.createNode({}))
  })

  test("should set decorationLayout", () => {
    const newValue = "Some String"
    widget.set("decorationLayout", newValue)
    expect(widget.node.setDecorationLayout).toHaveBeenCalledWith(newValue)
  })

  test("should set side", () => {
    const newValue = Gtk.PackType.START
    widget.set("side", newValue)
    expect(widget.node.setSide).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyDecorationLayout", () => {
    const callback = jest.fn()

    widget.set("onNotifyDecorationLayout", callback)

    const handler = widget.handlers["notify::decoration-layout"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::decoration-layout",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEmpty", () => {
    const callback = jest.fn()

    widget.set("onNotifyEmpty", callback)

    const handler = widget.handlers["notify::empty"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::empty",
      expect.any(Function)
    )
  })

  test("should connect onNotifySide", () => {
    const callback = jest.fn()

    widget.set("onNotifySide", callback)

    const handler = widget.handlers["notify::side"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::side",
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
