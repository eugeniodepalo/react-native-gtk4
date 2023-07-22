import { AspectFrame } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AspectFrame", () => {
  let widget

  beforeEach(() => {
    widget = new AspectFrame({})
  })

  test("should set obeyChild", () => {
    const newValue = true
    widget.set("obeyChild", newValue)
    expect(widget.node.setObeyChild).toHaveBeenCalledWith(newValue)
  })

  test("should set ratio", () => {
    const newValue = 1
    widget.set("ratio", newValue)
    expect(widget.node.setRatio).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.setXalign).toHaveBeenCalledWith(newValue)
  })

  test("should set yalign", () => {
    const newValue = 1
    widget.set("yalign", newValue)
    expect(widget.node.setYalign).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyObeyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyObeyChild", callback)

    const handler = widget.handlers["notify::obey-child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::obey-child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRatio", () => {
    const callback = jest.fn()

    widget.set("onNotifyRatio", callback)

    const handler = widget.handlers["notify::ratio"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::ratio",
      expect.any(Function)
    )
  })

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyXalign", callback)

    const handler = widget.handlers["notify::xalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::xalign",
      expect.any(Function)
    )
  })

  test("should connect onNotifyYalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyYalign", callback)

    const handler = widget.handlers["notify::yalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::yalign",
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
    const child = new AspectFrame()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new AspectFrame()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new AspectFrame()
    const sibling = new AspectFrame()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
