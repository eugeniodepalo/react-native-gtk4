import { Picture } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Picture", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.Picture()
    Gtk.Picture.mockImplementation(() => node)
    widget = new Picture({})
  })

  test("should set alternativeText", () => {
    const newValue = "Some String"
    widget.set("alternativeText", newValue)
    expect(node.setAlternativeText).toHaveBeenCalledWith(newValue)
  })

  test("should set canShrink", () => {
    const newValue = true
    widget.set("canShrink", newValue)
    expect(node.setCanShrink).toHaveBeenCalledWith(newValue)
  })

  test("should set contentFit", () => {
    const newValue = Gtk.ContentFit.FILL
    widget.set("contentFit", newValue)
    expect(node.setContentFit).toHaveBeenCalledWith(newValue)
  })

  test("should set file", () => {
    const newValue = new Gio.File()
    widget.set("file", newValue)
    expect(node.setFile).toHaveBeenCalledWith(newValue)
  })

  test("should set keepAspectRatio", () => {
    const newValue = true
    widget.set("keepAspectRatio", newValue)
    expect(node.setKeepAspectRatio).toHaveBeenCalledWith(newValue)
  })

  test("should set paintable", () => {
    const newValue = new Gdk.Paintable()
    widget.set("paintable", newValue)
    expect(node.setPaintable).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyAlternativeText", () => {
    const callback = jest.fn()
    widget.set("onNotifyAlternativeText", callback)
    const handler = widget.handlers["notify::alternative-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::alternative-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCanShrink", () => {
    const callback = jest.fn()
    widget.set("onNotifyCanShrink", callback)
    const handler = widget.handlers["notify::can-shrink"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::can-shrink",
      expect.any(Function)
    )
  })

  test("should connect onNotifyContentFit", () => {
    const callback = jest.fn()
    widget.set("onNotifyContentFit", callback)
    const handler = widget.handlers["notify::content-fit"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::content-fit",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFile", () => {
    const callback = jest.fn()
    widget.set("onNotifyFile", callback)
    const handler = widget.handlers["notify::file"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::file", expect.any(Function))
  })

  test("should connect onNotifyKeepAspectRatio", () => {
    const callback = jest.fn()
    widget.set("onNotifyKeepAspectRatio", callback)
    const handler = widget.handlers["notify::keep-aspect-ratio"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::keep-aspect-ratio",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPaintable", () => {
    const callback = jest.fn()
    widget.set("onNotifyPaintable", callback)
    const handler = widget.handlers["notify::paintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::paintable",
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
