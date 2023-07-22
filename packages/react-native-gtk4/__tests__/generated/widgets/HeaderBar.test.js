import { HeaderBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("HeaderBar", () => {
  let widget

  beforeEach(() => {
    widget = new HeaderBar({})
  })

  test("should set decorationLayout", () => {
    const newValue = "Some String"
    widget.set("decorationLayout", newValue)
    expect(widget.node.setDecorationLayout).toHaveBeenCalledWith(newValue)
  })

  test("should set showTitleButtons", () => {
    const newValue = true
    widget.set("showTitleButtons", newValue)
    expect(widget.node.setShowTitleButtons).toHaveBeenCalledWith(newValue)
  })

  test("should set titleWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("titleWidget", newValue)
    expect(widget.node.setTitleWidget).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyShowTitleButtons", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowTitleButtons", callback)

    const handler = widget.handlers["notify::show-title-buttons"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-title-buttons",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTitleWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyTitleWidget", callback)

    const handler = widget.handlers["notify::title-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::title-widget",
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
