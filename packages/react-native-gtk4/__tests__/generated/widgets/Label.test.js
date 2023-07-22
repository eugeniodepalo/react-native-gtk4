import { Label } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Label", () => {
  let widget

  beforeEach(() => {
    widget = new Label({})
  })

  test("should set attributes", () => {
    const newValue = new Pango.AttrList()
    widget.set("attributes", newValue)
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set ellipsize", () => {
    const newValue = Pango.EllipsizeMode.NONE
    widget.set("ellipsize", newValue)
    expect(widget.node.setEllipsize).toHaveBeenCalledWith(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = new Gio.MenuModel()
    widget.set("extraMenu", newValue)
    expect(widget.node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set justify", () => {
    const newValue = Gtk.Justification.LEFT
    widget.set("justify", newValue)
    expect(widget.node.setJustify).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "Some String"
    widget.set("label", newValue)
    expect(widget.node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set lines", () => {
    const newValue = 1
    widget.set("lines", newValue)
    expect(widget.node.setLines).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 1
    widget.set("maxWidthChars", newValue)
    expect(widget.node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set mnemonicWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("mnemonicWidget", newValue)
    expect(widget.node.setMnemonicWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set naturalWrapMode", () => {
    const newValue = Gtk.NaturalWrapMode.INHERIT
    widget.set("naturalWrapMode", newValue)
    expect(widget.node.setNaturalWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set selectable", () => {
    const newValue = true
    widget.set("selectable", newValue)
    expect(widget.node.setSelectable).toHaveBeenCalledWith(newValue)
  })

  test("should set singleLineMode", () => {
    const newValue = true
    widget.set("singleLineMode", newValue)
    expect(widget.node.setSingleLineMode).toHaveBeenCalledWith(newValue)
  })

  test("should set tabs", () => {
    const newValue = new Pango.TabArray()
    widget.set("tabs", newValue)
    expect(widget.node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(widget.node.setUseMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(widget.node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 1
    widget.set("widthChars", newValue)
    expect(widget.node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set wrap", () => {
    const newValue = true
    widget.set("wrap", newValue)
    expect(widget.node.setWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapMode", () => {
    const newValue = Pango.WrapMode.WORD
    widget.set("wrapMode", newValue)
    expect(widget.node.setWrapMode).toHaveBeenCalledWith(newValue)
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

  test("should connect onActivateCurrentLink", () => {
    const callback = jest.fn()

    widget.set("onActivateCurrentLink", callback)

    const handler = widget.handlers["activate-current-link"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-current-link",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onActivateLink", () => {
    const callback = jest.fn()

    widget.set("onActivateLink", callback)

    const handler = widget.handlers["activate-link"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-link",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCopyClipboard", () => {
    const callback = jest.fn()

    widget.set("onCopyClipboard", callback)

    const handler = widget.handlers["copy-clipboard"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "copy-clipboard",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveCursor", () => {
    const callback = jest.fn()

    widget.set("onMoveCursor", callback)

    const handler = widget.handlers["move-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-cursor",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAttributes", () => {
    const callback = jest.fn()

    widget.set("onNotifyAttributes", callback)

    const handler = widget.handlers["notify::attributes"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::attributes",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEllipsize", () => {
    const callback = jest.fn()

    widget.set("onNotifyEllipsize", callback)

    const handler = widget.handlers["notify::ellipsize"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::ellipsize",
      expect.any(Function)
    )
  })

  test("should connect onNotifyExtraMenu", () => {
    const callback = jest.fn()

    widget.set("onNotifyExtraMenu", callback)

    const handler = widget.handlers["notify::extra-menu"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::extra-menu",
      expect.any(Function)
    )
  })

  test("should connect onNotifyJustify", () => {
    const callback = jest.fn()

    widget.set("onNotifyJustify", callback)

    const handler = widget.handlers["notify::justify"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::justify",
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

  test("should connect onNotifyLines", () => {
    const callback = jest.fn()

    widget.set("onNotifyLines", callback)

    const handler = widget.handlers["notify::lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxWidthChars", callback)

    const handler = widget.handlers["notify::max-width-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-width-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMnemonicKeyval", () => {
    const callback = jest.fn()

    widget.set("onNotifyMnemonicKeyval", callback)

    const handler = widget.handlers["notify::mnemonic-keyval"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::mnemonic-keyval",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMnemonicWidget", () => {
    const callback = jest.fn()

    widget.set("onNotifyMnemonicWidget", callback)

    const handler = widget.handlers["notify::mnemonic-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::mnemonic-widget",
      expect.any(Function)
    )
  })

  test("should connect onNotifyNaturalWrapMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyNaturalWrapMode", callback)

    const handler = widget.handlers["notify::natural-wrap-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::natural-wrap-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectable", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectable", callback)

    const handler = widget.handlers["notify::selectable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selectable",
      expect.any(Function)
    )
  })

  test("should connect onNotifySingleLineMode", () => {
    const callback = jest.fn()

    widget.set("onNotifySingleLineMode", callback)

    const handler = widget.handlers["notify::single-line-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::single-line-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTabs", () => {
    const callback = jest.fn()

    widget.set("onNotifyTabs", callback)

    const handler = widget.handlers["notify::tabs"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tabs",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseMarkup", callback)

    const handler = widget.handlers["notify::use-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseUnderline", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseUnderline", callback)

    const handler = widget.handlers["notify::use-underline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-underline",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyWidthChars", callback)

    const handler = widget.handlers["notify::width-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::width-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWrap", () => {
    const callback = jest.fn()

    widget.set("onNotifyWrap", callback)

    const handler = widget.handlers["notify::wrap"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrap",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWrapMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyWrapMode", callback)

    const handler = widget.handlers["notify::wrap-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrap-mode",
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
})
