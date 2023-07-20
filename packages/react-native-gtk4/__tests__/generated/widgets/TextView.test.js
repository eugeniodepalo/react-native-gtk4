import { TextView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"
import Pango from "@girs/node-pango-1.0"

describe("TextView", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.TextView.mockImplementation(() => node)
    node = new Gtk.TextView()
    widget = new TextView({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set acceptsTab", () => {
    const newValue = true
    widget.set("acceptsTab", newValue)
    expect(node.setAcceptsTab).toHaveBeenCalledWith(newValue)
  })

  test("should set bottomMargin", () => {
    const newValue = 42
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
    const newValue = "New String"
    widget.set("imModule", newValue)
    expect(node.imModule).toBe(newValue)
  })

  test("should set indent", () => {
    const newValue = 42
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
    const newValue = 42
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
    const newValue = 42
    widget.set("pixelsAboveLines", newValue)
    expect(node.setPixelsAboveLines).toHaveBeenCalledWith(newValue)
  })

  test("should set pixelsBelowLines", () => {
    const newValue = 42
    widget.set("pixelsBelowLines", newValue)
    expect(node.setPixelsBelowLines).toHaveBeenCalledWith(newValue)
  })

  test("should set pixelsInsideWrap", () => {
    const newValue = 42
    widget.set("pixelsInsideWrap", newValue)
    expect(node.setPixelsInsideWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set rightMargin", () => {
    const newValue = 42
    widget.set("rightMargin", newValue)
    expect(node.setRightMargin).toHaveBeenCalledWith(newValue)
  })

  test("should set tabs", () => {
    const newValue = new Pango.TabArray()
    widget.set("tabs", newValue)
    expect(node.setTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set topMargin", () => {
    const newValue = 42
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
})
