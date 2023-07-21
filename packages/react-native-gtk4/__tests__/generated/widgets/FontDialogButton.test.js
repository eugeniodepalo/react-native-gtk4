import { FontDialogButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Pango from "@girs/node-pango-1.0"

describe("FontDialogButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.FontDialogButton()
    Gtk.FontDialogButton.mockImplementation(() => node)
    widget = new FontDialogButton({})
  })

  test("should set dialog", () => {
    const newValue = new Gtk.FontDialog()
    widget.set("dialog", newValue)
    expect(node.setDialog).toHaveBeenCalledWith(newValue)
  })

  test("should set fontDesc", () => {
    const newValue = new Pango.FontDescription()
    widget.set("fontDesc", newValue)
    expect(node.setFontDesc).toHaveBeenCalledWith(newValue)
  })

  test("should set fontFeatures", () => {
    const newValue = "Some String"
    widget.set("fontFeatures", newValue)
    expect(node.setFontFeatures).toHaveBeenCalledWith(newValue)
  })

  test("should set language", () => {
    const newValue = new Pango.Language()
    widget.set("language", newValue)
    expect(node.setLanguage).toHaveBeenCalledWith(newValue)
  })

  test("should set level", () => {
    const newValue = Gtk.FontLevel.FAMILY
    widget.set("level", newValue)
    expect(node.setLevel).toHaveBeenCalledWith(newValue)
  })

  test("should set useFont", () => {
    const newValue = true
    widget.set("useFont", newValue)
    expect(node.setUseFont).toHaveBeenCalledWith(newValue)
  })

  test("should set useSize", () => {
    const newValue = true
    widget.set("useSize", newValue)
    expect(node.setUseSize).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyDialog", () => {
    const callback = jest.fn()
    widget.set("onNotifyDialog", callback)
    const handler = widget.handlers["notify::dialog"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::dialog", expect.any(Function))
  })

  test("should connect onNotifyFontDesc", () => {
    const callback = jest.fn()
    widget.set("onNotifyFontDesc", callback)
    const handler = widget.handlers["notify::font-desc"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::font-desc",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFontFeatures", () => {
    const callback = jest.fn()
    widget.set("onNotifyFontFeatures", callback)
    const handler = widget.handlers["notify::font-features"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::font-features",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLanguage", () => {
    const callback = jest.fn()
    widget.set("onNotifyLanguage", callback)
    const handler = widget.handlers["notify::language"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::language",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLevel", () => {
    const callback = jest.fn()
    widget.set("onNotifyLevel", callback)
    const handler = widget.handlers["notify::level"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::level", expect.any(Function))
  })

  test("should connect onNotifyUseFont", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseFont", callback)
    const handler = widget.handlers["notify::use-font"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-font",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseSize", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseSize", callback)
    const handler = widget.handlers["notify::use-size"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::use-size",
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
