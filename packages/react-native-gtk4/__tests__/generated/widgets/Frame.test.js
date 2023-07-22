import { Frame } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Frame", () => {
  let widget

  beforeEach(() => {
    widget = new Frame({})
  })

  test("should set label", () => {
    const newValue = "Some String"
    widget.set("label", newValue)
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set labelWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("labelWidget", newValue)
    expect(widget.node.setLabelWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set labelXalign", () => {
    const newValue = 1
    widget.set("labelXalign", newValue)
    expect(widget.node.labelXalign).toBe(newValue)
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

  test("should connect onNotifyLabel", () => {
    const callback = jest.fn()

    widget.set("onNotifyLabel", callback)

    const handler = widget.handlers["notify::label"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLabelWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyLabelWidget", callback)

    const handler = widget.handlers["notify::label-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLabelXalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyLabelXalign", callback)

    const handler = widget.handlers["notify::label-xalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::label-xalign",
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
    const child = new Frame()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new Frame()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new Frame()
    const sibling = new Frame()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
