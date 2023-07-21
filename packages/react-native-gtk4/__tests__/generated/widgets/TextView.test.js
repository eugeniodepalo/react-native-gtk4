import { TextView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import Pango from "@girs/node-pango-1.0"

describe("TextView", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.TextView()
    Gtk.TextView.mockImplementation(() => node)
    widget = new TextView({})
  })

  test("should set acceptsTab", () => {
    const newValue = true
    widget.set("acceptsTab", newValue)
    expect(node.setAcceptsTab).toHaveBeenCalledWith(newValue)
  })

  test("should set bottomMargin", () => {
    const newValue = 1
    widget.set("bottomMargin", newValue)
    expect(node.setBottomMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set buffer", () => {
    const newValue = new Gtk.TextBuffer()
    widget.set("buffer", newValue)
    expect(node.setBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set cursorVisible", () => {
    const newValue = true
    widget.set("cursorVisible", newValue)
    expect(node.setCursorVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = new Gio.MenuModel()
    widget.set("extraMenu", newValue)
    expect(node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set imModule", () => {
    const newValue = "Some String"
    widget.set("imModule", newValue)
    expect(node.imModule).toBe(newValue)
  })

  test("should set indent", () => {
    const newValue = 1
    widget.set("indent", newValue)
    expect(node.setIndent).toHaveBeenCalledWith(newValue)
  })

  test("should set inputHints", () => {
    const newValue = Gtk.InputHints.NONE
    widget.set("inputHints", newValue)
    expect(node.setInputHints).toHaveBeenCalledWith(newValue)
  })

  test("should set inputPurpose", () => {
    const newValue = Gtk.InputPurpose.FREE_FORM
    widget.set("inputPurpose", newValue)
    expect(node.setInputPurpose).toHaveBeenCalledWith(newValue)
  })

  test("should set justification", () => {
    const newValue = Gtk.Justification.LEFT
    widget.set("justification", newValue)
    expect(node.setJustification).toHaveBeenCalledWith(newValue)
  })

  test("should set leftMargin", () => {
    const newValue = 1
    widget.set("leftMargin", newValue)
    expect(node.setLeftMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set monospace", () => {
    const newValue = true
    widget.set("monospace", newValue)
    expect(node.setMonospace).toHaveBeenCalledWith(newValue)
  })

  test("should set overwrite", () => {
    const newValue = true
    widget.set("overwrite", newValue)
    expect(node.setOverwrite).toHaveBeenCalledWith(newValue)
  })

  test("should set pixelsAboveLines", () => {
    const newValue = 1
    widget.set("pixelsAboveLines", newValue)
    expect(node.setPixelsAboveLines).toHaveBeenCalledWith(newValue)
  })

  test("should set pixelsBelowLines", () => {
    const newValue = 1
    widget.set("pixelsBelowLines", newValue)
    expect(node.setPixelsBelowLines).toHaveBeenCalledWith(newValue)
  })

  test("should set pixelsInsideWrap", () => {
    const newValue = 1
    widget.set("pixelsInsideWrap", newValue)
    expect(node.setPixelsInsideWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set rightMargin", () => {
    const newValue = 1
    widget.set("rightMargin", newValue)
    expect(node.setRightMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set tabs", () => {
    const newValue = new Pango.TabArray()
    widget.set("tabs", newValue)
    expect(node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set topMargin", () => {
    const newValue = 1
    widget.set("topMargin", newValue)
    expect(node.setTopMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapMode", () => {
    const newValue = Gtk.WrapMode.NONE
    widget.set("wrapMode", newValue)
    expect(node.setWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should connect onBackspace", () => {
    const callback = jest.fn()
    widget.set("onBackspace", callback)
    const handler = widget.handlers["backspace"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("backspace", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCopyClipboard", () => {
    const callback = jest.fn()
    widget.set("onCopyClipboard", callback)
    const handler = widget.handlers["copy-clipboard"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("copy-clipboard", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCutClipboard", () => {
    const callback = jest.fn()
    widget.set("onCutClipboard", callback)
    const handler = widget.handlers["cut-clipboard"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("cut-clipboard", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDeleteFromCursor", () => {
    const callback = jest.fn()
    widget.set("onDeleteFromCursor", callback)
    const handler = widget.handlers["delete-from-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "delete-from-cursor",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onExtendSelection", () => {
    const callback = jest.fn()
    widget.set("onExtendSelection", callback)
    const handler = widget.handlers["extend-selection"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "extend-selection",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInsertAtCursor", () => {
    const callback = jest.fn()
    widget.set("onInsertAtCursor", callback)
    const handler = widget.handlers["insert-at-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "insert-at-cursor",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInsertEmoji", () => {
    const callback = jest.fn()
    widget.set("onInsertEmoji", callback)
    const handler = widget.handlers["insert-emoji"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("insert-emoji", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveCursor", () => {
    const callback = jest.fn()
    widget.set("onMoveCursor", callback)
    const handler = widget.handlers["move-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("move-cursor", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveViewport", () => {
    const callback = jest.fn()
    widget.set("onMoveViewport", callback)
    const handler = widget.handlers["move-viewport"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("move-viewport", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPasteClipboard", () => {
    const callback = jest.fn()
    widget.set("onPasteClipboard", callback)
    const handler = widget.handlers["paste-clipboard"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "paste-clipboard",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPreeditChanged", () => {
    const callback = jest.fn()
    widget.set("onPreeditChanged", callback)
    const handler = widget.handlers["preedit-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "preedit-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectAll", () => {
    const callback = jest.fn()
    widget.set("onSelectAll", callback)
    const handler = widget.handlers["select-all"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("select-all", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSetAnchor", () => {
    const callback = jest.fn()
    widget.set("onSetAnchor", callback)
    const handler = widget.handlers["set-anchor"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("set-anchor", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleCursorVisible", () => {
    const callback = jest.fn()
    widget.set("onToggleCursorVisible", callback)
    const handler = widget.handlers["toggle-cursor-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "toggle-cursor-visible",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleOverwrite", () => {
    const callback = jest.fn()
    widget.set("onToggleOverwrite", callback)
    const handler = widget.handlers["toggle-overwrite"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "toggle-overwrite",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAcceptsTab", () => {
    const callback = jest.fn()
    widget.set("onNotifyAcceptsTab", callback)
    const handler = widget.handlers["notify::accepts-tab"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accepts-tab",
      expect.any(Function)
    )
  })

  test("should connect onNotifyBottomMargin", () => {
    const callback = jest.fn()
    widget.set("onNotifyBottomMargin", callback)
    const handler = widget.handlers["notify::bottom-margin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::bottom-margin",
      expect.any(Function)
    )
  })

  test("should connect onNotifyBuffer", () => {
    const callback = jest.fn()
    widget.set("onNotifyBuffer", callback)
    const handler = widget.handlers["notify::buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::buffer", expect.any(Function))
  })

  test("should connect onNotifyCursorVisible", () => {
    const callback = jest.fn()
    widget.set("onNotifyCursorVisible", callback)
    const handler = widget.handlers["notify::cursor-visible"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::cursor-visible",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEditable", () => {
    const callback = jest.fn()
    widget.set("onNotifyEditable", callback)
    const handler = widget.handlers["notify::editable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::editable",
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::extra-menu",
      expect.any(Function)
    )
  })

  test("should connect onNotifyImModule", () => {
    const callback = jest.fn()
    widget.set("onNotifyImModule", callback)
    const handler = widget.handlers["notify::im-module"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::im-module",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIndent", () => {
    const callback = jest.fn()
    widget.set("onNotifyIndent", callback)
    const handler = widget.handlers["notify::indent"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::indent", expect.any(Function))
  })

  test("should connect onNotifyInputHints", () => {
    const callback = jest.fn()
    widget.set("onNotifyInputHints", callback)
    const handler = widget.handlers["notify::input-hints"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::input-hints",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInputPurpose", () => {
    const callback = jest.fn()
    widget.set("onNotifyInputPurpose", callback)
    const handler = widget.handlers["notify::input-purpose"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::input-purpose",
      expect.any(Function)
    )
  })

  test("should connect onNotifyJustification", () => {
    const callback = jest.fn()
    widget.set("onNotifyJustification", callback)
    const handler = widget.handlers["notify::justification"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::justification",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLeftMargin", () => {
    const callback = jest.fn()
    widget.set("onNotifyLeftMargin", callback)
    const handler = widget.handlers["notify::left-margin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::left-margin",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMonospace", () => {
    const callback = jest.fn()
    widget.set("onNotifyMonospace", callback)
    const handler = widget.handlers["notify::monospace"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::monospace",
      expect.any(Function)
    )
  })

  test("should connect onNotifyOverwrite", () => {
    const callback = jest.fn()
    widget.set("onNotifyOverwrite", callback)
    const handler = widget.handlers["notify::overwrite"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::overwrite",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPixelsAboveLines", () => {
    const callback = jest.fn()
    widget.set("onNotifyPixelsAboveLines", callback)
    const handler = widget.handlers["notify::pixels-above-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::pixels-above-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPixelsBelowLines", () => {
    const callback = jest.fn()
    widget.set("onNotifyPixelsBelowLines", callback)
    const handler = widget.handlers["notify::pixels-below-lines"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::pixels-below-lines",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPixelsInsideWrap", () => {
    const callback = jest.fn()
    widget.set("onNotifyPixelsInsideWrap", callback)
    const handler = widget.handlers["notify::pixels-inside-wrap"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::pixels-inside-wrap",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRightMargin", () => {
    const callback = jest.fn()
    widget.set("onNotifyRightMargin", callback)
    const handler = widget.handlers["notify::right-margin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::right-margin",
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
    expect(node.on).toHaveBeenCalledWith("notify::tabs", expect.any(Function))
  })

  test("should connect onNotifyTopMargin", () => {
    const callback = jest.fn()
    widget.set("onNotifyTopMargin", callback)
    const handler = widget.handlers["notify::top-margin"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::top-margin",
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::wrap-mode",
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

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn()
    widget.set("onNotifyHadjustment", callback)
    const handler = widget.handlers["notify::hadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn()
    widget.set("onNotifyHscrollPolicy", callback)
    const handler = widget.handlers["notify::hscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hscroll-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn()
    widget.set("onNotifyVadjustment", callback)
    const handler = widget.handlers["notify::vadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn()
    widget.set("onNotifyVscrollPolicy", callback)
    const handler = widget.handlers["notify::vscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::vscroll-policy",
      expect.any(Function)
    )
  })
})
