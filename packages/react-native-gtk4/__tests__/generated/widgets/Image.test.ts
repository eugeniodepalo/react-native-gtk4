import { Image } from "@/generated/widgets.js"
import Gio from "@/generated/girs/node-gio-2.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import Gdk from "@/generated/girs/node-gdk-4.0.js"

describe("Image", () => {
  let widget: Image

  beforeEach(() => {
    widget = new Image({}, Image.createNode())
  })

  test("should set file", () => {
    const newValue = "Some String"
    widget.set("file", newValue)
    expect(widget.node.file).toBe(newValue)
  })

  test("should set gicon", () => {
    const newValue = undefined
    widget.set("gicon", newValue)
    expect(widget.node.gicon).toBe(newValue)
  })

  test("should set iconName", () => {
    const newValue = "Some String"
    widget.set("iconName", newValue)
    expect(widget.node.iconName).toBe(newValue)
  })

  test("should set iconSize", () => {
    const newValue = Gtk.IconSize.INHERIT
    widget.set("iconSize", newValue)
    expect(widget.node.setIconSize).toHaveBeenCalledWith(newValue)
  })

  test("should set paintable", () => {
    const newValue = undefined
    widget.set("paintable", newValue)
    expect(widget.node.paintable).toBe(newValue)
  })

  test("should set pixelSize", () => {
    const newValue = 1
    widget.set("pixelSize", newValue)
    expect(widget.node.setPixelSize).toHaveBeenCalledWith(newValue)
  })

  test("should set resource", () => {
    const newValue = "Some String"
    widget.set("resource", newValue)
    expect(widget.node.resource).toBe(newValue)
  })

  test("should set useFallback", () => {
    const newValue = true
    widget.set("useFallback", newValue)
    expect(widget.node.useFallback).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyFile", () => {
    const callback = jest.fn()

    widget.set("onNotifyFile", callback)

    const handler = widget.handlers["notify::file"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::file",
      expect.any(Function)
    )
  })

  test("should connect onNotifyGicon", () => {
    const callback = jest.fn()

    widget.set("onNotifyGicon", callback)

    const handler = widget.handlers["notify::gicon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::gicon",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyIconName", callback)

    const handler = widget.handlers["notify::icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIconSize", () => {
    const callback = jest.fn()

    widget.set("onNotifyIconSize", callback)

    const handler = widget.handlers["notify::icon-size"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::icon-size",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::paintable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPixelSize", () => {
    const callback = jest.fn()

    widget.set("onNotifyPixelSize", callback)

    const handler = widget.handlers["notify::pixel-size"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pixel-size",
      expect.any(Function)
    )
  })

  test("should connect onNotifyResource", () => {
    const callback = jest.fn()

    widget.set("onNotifyResource", callback)

    const handler = widget.handlers["notify::resource"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::resource",
      expect.any(Function)
    )
  })

  test("should connect onNotifyStorageType", () => {
    const callback = jest.fn()

    widget.set("onNotifyStorageType", callback)

    const handler = widget.handlers["notify::storage-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::storage-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseFallback", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseFallback", callback)

    const handler = widget.handlers["notify::use-fallback"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-fallback",
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
