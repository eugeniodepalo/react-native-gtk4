import { ColorChooserWidget } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("ColorChooserWidget", () => {
  let widget

  beforeEach(() => {
    widget = new ColorChooserWidget({})
  })

  test("should set showEditor", () => {
    const newValue = true
    widget.set("showEditor", newValue)
    expect(widget.node.showEditor).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set rgba", () => {
    const newValue = new Gdk.RGBA()
    widget.set("rgba", newValue)
    expect(widget.node.setRgba).toHaveBeenCalledWith(newValue)
  })

  test("should set useAlpha", () => {
    const newValue = true
    widget.set("useAlpha", newValue)
    expect(widget.node.setUseAlpha).toHaveBeenCalledWith(newValue)
  })

  test("should connect onColorActivated", () => {
    const callback = jest.fn()

    widget.set("onColorActivated", callback)

    const handler = widget.handlers["color-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "color-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyShowEditor", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowEditor", callback)

    const handler = widget.handlers["notify::show-editor"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-editor",
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

  test("should connect onNotifyRgba", () => {
    const callback = jest.fn()

    widget.set("onNotifyRgba", callback)

    const handler = widget.handlers["notify::rgba"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::rgba",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseAlpha", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseAlpha", callback)

    const handler = widget.handlers["notify::use-alpha"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-alpha",
      expect.any(Function)
    )
  })
})
