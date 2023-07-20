import { Label } from "../../../src/generated/widgets.js"
import Pango from "@girs/node-pango-1.0"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Label", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Label.mockImplementation(() => node)
    node = new Gtk.Label()
    widget = new Label({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set attributes", () => {
    const newValue = new Pango.AttrList()
    widget.set("attributes", newValue)
    expect(node.setAttributes).toHaveBeenCalledWith(newValue)
  })

  test("should set ellipsize", () => {
    const newValue = Pango.EllipsizeMode.NONE
    widget.set("ellipsize", newValue)
    expect(node.setEllipsize).toHaveBeenCalledWith(newValue)
  })

  test("should set extraMenu", () => {
    const newValue = new Gio.MenuModel()
    widget.set("extraMenu", newValue)
    expect(node.setExtraMenu).toHaveBeenCalledWith(newValue)
  })

  test("should set justify", () => {
    const newValue = Gtk.Justification.LEFT
    widget.set("justify", newValue)
    expect(node.setJustify).toHaveBeenCalledWith(newValue)
  })

  test("should set label", () => {
    const newValue = "New String"
    widget.set("label", newValue)
    expect(node.setLabel).toHaveBeenCalledWith(newValue)
  })

  test("should set lines", () => {
    const newValue = 42
    widget.set("lines", newValue)
    expect(node.setLines).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 42
    widget.set("maxWidthChars", newValue)
    expect(node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set mnemonicWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("mnemonicWidget", newValue)
    expect(node.setMnemonicWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set naturalWrapMode", () => {
    const newValue = Gtk.NaturalWrapMode.INHERIT
    widget.set("naturalWrapMode", newValue)
    expect(node.setNaturalWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set selectable", () => {
    const newValue = true
    widget.set("selectable", newValue)
    expect(node.setSelectable).toHaveBeenCalledWith(newValue)
  })

  test("should set singleLineMode", () => {
    const newValue = true
    widget.set("singleLineMode", newValue)
    expect(node.setSingleLineMode).toHaveBeenCalledWith(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(node.setUseMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set useUnderline", () => {
    const newValue = true
    widget.set("useUnderline", newValue)
    expect(node.setUseUnderline).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 42
    widget.set("widthChars", newValue)
    expect(node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set wrap", () => {
    const newValue = true
    widget.set("wrap", newValue)
    expect(node.setWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set wrapMode", () => {
    const newValue = Pango.WrapMode.NONE
    widget.set("wrapMode", newValue)
    expect(node.setWrapMode).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 42
    widget.set("xalign", newValue)
    expect(node.setXalign).toHaveBeenCalledWith(newValue)
  })

  test("should set yalign", () => {
    const newValue = 42
    widget.set("yalign", newValue)
    expect(node.setYalign).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
