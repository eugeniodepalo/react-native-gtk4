import { Image } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Image", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Image.mockImplementation(() => node)
    node = new Gtk.Image()
    widget = new Image({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set file", () => {
    const newValue = "New String"
    widget.set("file", newValue)
    expect(node.file).toBe(newValue)
  })

  test("should set gicon", () => {
    const newValue = new Gio.Icon()
    widget.set("gicon", newValue)
    expect(node.gicon).toBe(newValue)
  })

  test("should set iconName", () => {
    const newValue = "New String"
    widget.set("iconName", newValue)
    expect(node.iconName).toBe(newValue)
  })

  test("should set iconSize", () => {
    const newValue = Gtk.IconSize.INHERIT
    widget.set("iconSize", newValue)
    expect(node.setIconSize).toHaveBeenCalledWith(newValue)
  })

  test("should set paintable", () => {
    const newValue = new Gdk.Paintable()
    widget.set("paintable", newValue)
    expect(node.paintable).toBe(newValue)
  })

  test("should set pixelSize", () => {
    const newValue = 42
    widget.set("pixelSize", newValue)
    expect(node.setPixelSize).toHaveBeenCalledWith(newValue)
  })

  test("should set resource", () => {
    const newValue = "New String"
    widget.set("resource", newValue)
    expect(node.resource).toBe(newValue)
  })

  test("should set useFallback", () => {
    const newValue = true
    widget.set("useFallback", newValue)
    expect(node.useFallback).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
