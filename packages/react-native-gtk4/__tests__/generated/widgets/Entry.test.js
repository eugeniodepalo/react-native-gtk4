import { Entry } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import Gdk from "@girs/node-gdk-4.0"

describe("Entry", () => {
  let widget

  beforeEach(() => {
    widget = new Entry({})
  })

  test("should set activatesDefault", () => {
    const newValue = true
    widget.set("activatesDefault", newValue)
    expect(widget.node.setActivatesDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set attributes", () => {
    const newValue = new Pango.AttrList()
    widget.set("attributes", newValue)
    expect(widget.node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set buffer", () => {
    const newValue = new Gtk.EntryBuffer()
    widget.set("buffer", newValue)
    expect(widget.node.setBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set completion", () => {
    const newValue = new Gtk.EntryCompletion()
    widget.set("completion", newValue)
    expect(widget.node.setCompletion).toHaveBeenCalledWith(newValue)
  })

  test("should set enableEmojiCompletion", () => {
    const newValue = true
    widget.set("enableEmojiCompletion", newValue)
    expect(widget.node.enableEmojiCompletion).toBe(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = new Gio.MenuModel()
    widget.set("extraMenu", newValue)
    expect(widget.node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(widget.node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set imModule", () => {
    const newValue = "Some String"
    widget.set("imModule", newValue)
    expect(widget.node.imModule).toBe(newValue)
  })

  test("should set inputHints", () => {
    const newValue = Gtk.InputHints.NONE
    widget.set("inputHints", newValue)
    expect(widget.node.setInputHints).toHaveBeenCalledWith(newValue)
  })

  test("should set inputPurpose", () => {
    const newValue = Gtk.InputPurpose.FREE_FORM
    widget.set("inputPurpose", newValue)
    expect(widget.node.setInputPurpose).toHaveBeenCalledWith(newValue)
  })

  test("should set invisibleChar", () => {
    const newValue = 1
    widget.set("invisibleChar", newValue)
    expect(widget.node.setInvisibleChar).toHaveBeenCalledWith(newValue)
  })

  test("should set invisibleCharSet", () => {
    const newValue = true
    widget.set("invisibleCharSet", newValue)
    expect(widget.node.invisibleCharSet).toBe(newValue)
  })

  test("should set maxLength", () => {
    const newValue = 1
    widget.set("maxLength", newValue)
    expect(widget.node.setMaxLength).toHaveBeenCalledWith(newValue)
  })

  test("should set overwriteMode", () => {
    const newValue = true
    widget.set("overwriteMode", newValue)
    expect(widget.node.setOverwriteMode).toHaveBeenCalledWith(newValue)
  })

  test("should set placeholderText", () => {
    const newValue = "Some String"
    widget.set("placeholderText", newValue)
    expect(widget.node.setPlaceholderText).toHaveBeenCalledWith(newValue)
  })

  test("should set primaryIconActivatable", () => {
    const newValue = true
    widget.set("primaryIconActivatable", newValue)
    expect(widget.node.primaryIconActivatable).toBe(newValue)
  })

  test("should set primaryIconGicon", () => {
    const newValue = new Gio.Icon()
    widget.set("primaryIconGicon", newValue)
    expect(widget.node.primaryIconGicon).toBe(newValue)
  })

  test("should set primaryIconName", () => {
    const newValue = "Some String"
    widget.set("primaryIconName", newValue)
    expect(widget.node.primaryIconName).toBe(newValue)
  })

  test("should set primaryIconPaintable", () => {
    const newValue = new Gdk.Paintable()
    widget.set("primaryIconPaintable", newValue)
    expect(widget.node.primaryIconPaintable).toBe(newValue)
  })

  test("should set primaryIconSensitive", () => {
    const newValue = true
    widget.set("primaryIconSensitive", newValue)
    expect(widget.node.primaryIconSensitive).toBe(newValue)
  })

  test("should set primaryIconTooltipMarkup", () => {
    const newValue = "Some String"
    widget.set("primaryIconTooltipMarkup", newValue)
    expect(widget.node.primaryIconTooltipMarkup).toBe(newValue)
  })

  test("should set primaryIconTooltipText", () => {
    const newValue = "Some String"
    widget.set("primaryIconTooltipText", newValue)
    expect(widget.node.primaryIconTooltipText).toBe(newValue)
  })

  test("should set progressFraction", () => {
    const newValue = 1
    widget.set("progressFraction", newValue)
    expect(widget.node.setProgressFraction).toHaveBeenCalledWith(newValue)
  })

  test("should set progressPulseStep", () => {
    const newValue = 1
    widget.set("progressPulseStep", newValue)
    expect(widget.node.setProgressPulseStep).toHaveBeenCalledWith(newValue)
  })

  test("should set secondaryIconActivatable", () => {
    const newValue = true
    widget.set("secondaryIconActivatable", newValue)
    expect(widget.node.secondaryIconActivatable).toBe(newValue)
  })

  test("should set secondaryIconGicon", () => {
    const newValue = new Gio.Icon()
    widget.set("secondaryIconGicon", newValue)
    expect(widget.node.secondaryIconGicon).toBe(newValue)
  })

  test("should set secondaryIconName", () => {
    const newValue = "Some String"
    widget.set("secondaryIconName", newValue)
    expect(widget.node.secondaryIconName).toBe(newValue)
  })

  test("should set secondaryIconPaintable", () => {
    const newValue = new Gdk.Paintable()
    widget.set("secondaryIconPaintable", newValue)
    expect(widget.node.secondaryIconPaintable).toBe(newValue)
  })

  test("should set secondaryIconSensitive", () => {
    const newValue = true
    widget.set("secondaryIconSensitive", newValue)
    expect(widget.node.secondaryIconSensitive).toBe(newValue)
  })

  test("should set secondaryIconTooltipMarkup", () => {
    const newValue = "Some String"
    widget.set("secondaryIconTooltipMarkup", newValue)
    expect(widget.node.secondaryIconTooltipMarkup).toBe(newValue)
  })

  test("should set secondaryIconTooltipText", () => {
    const newValue = "Some String"
    widget.set("secondaryIconTooltipText", newValue)
    expect(widget.node.secondaryIconTooltipText).toBe(newValue)
  })

  test("should set showEmojiIcon", () => {
    const newValue = true
    widget.set("showEmojiIcon", newValue)
    expect(widget.node.showEmojiIcon).toBe(newValue)
  })

  test("should set tabs", () => {
    const newValue = new Pango.TabArray()
    widget.set("tabs", newValue)
    expect(widget.node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set truncateMultiline", () => {
    const newValue = true
    widget.set("truncateMultiline", newValue)
    expect(widget.node.truncateMultiline).toBe(newValue)
  })

  test("should set visibility", () => {
    const newValue = true
    widget.set("visibility", newValue)
    expect(widget.node.setVisibility).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set editingCanceled", () => {
    const newValue = true
    widget.set("editingCanceled", newValue)
    expect(widget.node.editingCanceled).toBe(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(widget.node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set enableUndo", () => {
    const newValue = true
    widget.set("enableUndo", newValue)
    expect(widget.node.setEnableUndo).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 1
    widget.set("maxWidthChars", newValue)
    expect(widget.node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 1
    widget.set("widthChars", newValue)
    expect(widget.node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.xalign).toBe(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onIconPress", () => {
    const callback = jest.fn()

    widget.set("onIconPress", callback)

    const handler = widget.handlers["icon-press"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "icon-press",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onIconRelease", () => {
    const callback = jest.fn()

    widget.set("onIconRelease", callback)

    const handler = widget.handlers["icon-release"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "icon-release",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onEditingDone", () => {
    const callback = jest.fn()

    widget.set("onEditingDone", callback)

    const handler = widget.handlers["editing-done"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "editing-done",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRemoveWidget", () => {
    const callback = jest.fn()

    widget.set("onRemoveWidget", callback)

    const handler = widget.handlers["remove-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "remove-widget",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChanged", () => {
    const callback = jest.fn()

    widget.set("onChanged", callback)

    const handler = widget.handlers["changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDeleteText", () => {
    const callback = jest.fn()

    widget.set("onDeleteText", callback)

    const handler = widget.handlers["delete-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "delete-text",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInsertText", () => {
    const callback = jest.fn()

    widget.set("onInsertText", callback)

    const handler = widget.handlers["insert-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "insert-text",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActivatesDefault", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivatesDefault", callback)

    const handler = widget.handlers["notify::activates-default"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activates-default",
      expect.any(Function)
    )
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

  test("should connect onNotifyBuffer", () => {
    const callback = jest.fn()

    widget.set("onNotifyBuffer", callback)

    const handler = widget.handlers["notify::buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buffer",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCompletion", () => {
    const callback = jest.fn()

    widget.set("onNotifyCompletion", callback)

    const handler = widget.handlers["notify::completion"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::completion",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableEmojiCompletion", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableEmojiCompletion", callback)

    const handler = widget.handlers["notify::enable-emoji-completion"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-emoji-completion",
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

  test("should connect onNotifyHasFrame", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasFrame", callback)

    const handler = widget.handlers["notify::has-frame"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-frame",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::im-module",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInputHints", () => {
    const callback = jest.fn()

    widget.set("onNotifyInputHints", callback)

    const handler = widget.handlers["notify::input-hints"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::input-purpose",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInvisibleChar", () => {
    const callback = jest.fn()

    widget.set("onNotifyInvisibleChar", callback)

    const handler = widget.handlers["notify::invisible-char"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::invisible-char",
      expect.any(Function)
    )
  })

  test("should connect onNotifyInvisibleCharSet", () => {
    const callback = jest.fn()

    widget.set("onNotifyInvisibleCharSet", callback)

    const handler = widget.handlers["notify::invisible-char-set"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::invisible-char-set",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxLength", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxLength", callback)

    const handler = widget.handlers["notify::max-length"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-length",
      expect.any(Function)
    )
  })

  test("should connect onNotifyOverwriteMode", () => {
    const callback = jest.fn()

    widget.set("onNotifyOverwriteMode", callback)

    const handler = widget.handlers["notify::overwrite-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::overwrite-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPlaceholderText", () => {
    const callback = jest.fn()

    widget.set("onNotifyPlaceholderText", callback)

    const handler = widget.handlers["notify::placeholder-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::placeholder-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconActivatable", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconActivatable", callback)

    const handler = widget.handlers["notify::primary-icon-activatable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-activatable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconGicon", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconGicon", callback)

    const handler = widget.handlers["notify::primary-icon-gicon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-gicon",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconName", callback)

    const handler = widget.handlers["notify::primary-icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconPaintable", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconPaintable", callback)

    const handler = widget.handlers["notify::primary-icon-paintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-paintable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconSensitive", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconSensitive", callback)

    const handler = widget.handlers["notify::primary-icon-sensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-sensitive",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconStorageType", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconStorageType", callback)

    const handler = widget.handlers["notify::primary-icon-storage-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-storage-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconTooltipMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconTooltipMarkup", callback)

    const handler = widget.handlers["notify::primary-icon-tooltip-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-tooltip-markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrimaryIconTooltipText", () => {
    const callback = jest.fn()

    widget.set("onNotifyPrimaryIconTooltipText", callback)

    const handler = widget.handlers["notify::primary-icon-tooltip-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::primary-icon-tooltip-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyProgressFraction", () => {
    const callback = jest.fn()

    widget.set("onNotifyProgressFraction", callback)

    const handler = widget.handlers["notify::progress-fraction"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::progress-fraction",
      expect.any(Function)
    )
  })

  test("should connect onNotifyProgressPulseStep", () => {
    const callback = jest.fn()

    widget.set("onNotifyProgressPulseStep", callback)

    const handler = widget.handlers["notify::progress-pulse-step"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::progress-pulse-step",
      expect.any(Function)
    )
  })

  test("should connect onNotifyScrollOffset", () => {
    const callback = jest.fn()

    widget.set("onNotifyScrollOffset", callback)

    const handler = widget.handlers["notify::scroll-offset"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::scroll-offset",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconActivatable", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconActivatable", callback)

    const handler = widget.handlers["notify::secondary-icon-activatable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-activatable",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconGicon", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconGicon", callback)

    const handler = widget.handlers["notify::secondary-icon-gicon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-gicon",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconName", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconName", callback)

    const handler = widget.handlers["notify::secondary-icon-name"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-name",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconPaintable", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconPaintable", callback)

    const handler = widget.handlers["notify::secondary-icon-paintable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-paintable",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconSensitive", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconSensitive", callback)

    const handler = widget.handlers["notify::secondary-icon-sensitive"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-sensitive",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconStorageType", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconStorageType", callback)

    const handler = widget.handlers["notify::secondary-icon-storage-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-storage-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconTooltipMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconTooltipMarkup", callback)

    const handler = widget.handlers["notify::secondary-icon-tooltip-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-tooltip-markup",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryIconTooltipText", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryIconTooltipText", callback)

    const handler = widget.handlers["notify::secondary-icon-tooltip-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-icon-tooltip-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowEmojiIcon", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowEmojiIcon", callback)

    const handler = widget.handlers["notify::show-emoji-icon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-emoji-icon",
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

  test("should connect onNotifyTextLength", () => {
    const callback = jest.fn()

    widget.set("onNotifyTextLength", callback)

    const handler = widget.handlers["notify::text-length"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text-length",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTruncateMultiline", () => {
    const callback = jest.fn()

    widget.set("onNotifyTruncateMultiline", callback)

    const handler = widget.handlers["notify::truncate-multiline"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::truncate-multiline",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVisibility", () => {
    const callback = jest.fn()

    widget.set("onNotifyVisibility", callback)

    const handler = widget.handlers["notify::visibility"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::visibility",
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

  test("should connect onNotifyEditingCanceled", () => {
    const callback = jest.fn()

    widget.set("onNotifyEditingCanceled", callback)

    const handler = widget.handlers["notify::editing-canceled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editing-canceled",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCursorPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyCursorPosition", callback)

    const handler = widget.handlers["notify::cursor-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cursor-position",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableUndo", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableUndo", callback)

    const handler = widget.handlers["notify::enable-undo"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-undo",
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

  test("should connect onNotifySelectionBound", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectionBound", callback)

    const handler = widget.handlers["notify::selection-bound"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selection-bound",
      expect.any(Function)
    )
  })

  test("should connect onNotifyText", () => {
    const callback = jest.fn()

    widget.set("onNotifyText", callback)

    const handler = widget.handlers["notify::text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
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
})
