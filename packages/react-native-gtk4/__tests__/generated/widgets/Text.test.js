import { Text } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("Text", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Text.mockImplementation(() => node)
    node = new Gtk.Text()
    widget = new Text({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set activatesDefault", () => {
    const newValue = true
    widget.set("activatesDefault", newValue)
    expect(node.setActivatesDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set attributes", () => {
    const newValue = new Pango.AttrList()
    widget.set("attributes", newValue)
    expect(node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set buffer", () => {
    const newValue = new Gtk.EntryBuffer()
    widget.set("buffer", newValue)
    expect(node.setBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set enableEmojiCompletion", () => {
    const newValue = true
    widget.set("enableEmojiCompletion", newValue)
    expect(node.setEnableEmojiCompletion).toHaveBeenCalledWith(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = new Gio.MenuModel()
    widget.set("extraMenu", newValue)
    expect(node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set imModule", () => {
    const newValue = "New String"
    widget.set("imModule", newValue)
    expect(node.imModule).toBe(newValue)
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

  test("should set invisibleChar", () => {
    const newValue = 42
    widget.set("invisibleChar", newValue)
    expect(node.setInvisibleChar).toHaveBeenCalledWith(newValue)
  })

  test("should set invisibleCharSet", () => {
    const newValue = true
    widget.set("invisibleCharSet", newValue)
    expect(node.invisibleCharSet).toBe(newValue)
  })

  test("should set maxLength", () => {
    const newValue = 42
    widget.set("maxLength", newValue)
    expect(node.setMaxLength).toHaveBeenCalledWith(newValue)
  })

  test("should set overwriteMode", () => {
    const newValue = true
    widget.set("overwriteMode", newValue)
    expect(node.setOverwriteMode).toHaveBeenCalledWith(newValue)
  })

  test("should set placeholderText", () => {
    const newValue = "New String"
    widget.set("placeholderText", newValue)
    expect(node.setPlaceholderText).toHaveBeenCalledWith(newValue)
  })

  test("should set propagateTextWidth", () => {
    const newValue = true
    widget.set("propagateTextWidth", newValue)
    expect(node.setPropagateTextWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set tabs", () => {
    const newValue = new Pango.TabArray()
    widget.set("tabs", newValue)
    expect(node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set truncateMultiline", () => {
    const newValue = true
    widget.set("truncateMultiline", newValue)
    expect(node.setTruncateMultiline).toHaveBeenCalledWith(newValue)
  })

  test("should set visibility", () => {
    const newValue = true
    widget.set("visibility", newValue)
    expect(node.setVisibility).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set enableUndo", () => {
    const newValue = true
    widget.set("enableUndo", newValue)
    expect(node.setEnableUndo).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 42
    widget.set("maxWidthChars", newValue)
    expect(node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "New String"
    widget.set("text", newValue)
    expect(node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 42
    widget.set("widthChars", newValue)
    expect(node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 42
    widget.set("xalign", newValue)
    expect(node.xalign).toBe(newValue)
  })
})
