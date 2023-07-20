import { Picture } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gdk from "@girs/node-gdk-4.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Picture", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Picture.mockImplementation(() => node)
    node = new Gtk.Picture()
    widget = new Picture({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set alternativeText", () => {
    const newValue = "New String"
    widget.set("alternativeText", newValue)
    expect(node.setAlternativeText).toHaveBeenCalledWith(newValue)
  })

  test("should set canShrink", () => {
    const newValue = true
    widget.set("canShrink", newValue)
    expect(node.setCanShrink).toHaveBeenCalledWith(newValue)
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
})
