import { Widget } from "../../../src/generated/widgets.js"
import Gdk from "@girs/node-gdk-4.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Widget", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Widget.mockImplementation(() => node)
    node = new Gtk.Widget()
    widget = new Widget({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set construct only props", () => {
    const cssName = "New String"
    new Widget({
      cssName,
    })

    expect(Gtk.Widget).toHaveBeenCalledWith({
      cssName,
    })
  })

  test("should set canFocus", () => {
    const newValue = true
    widget.set("canFocus", newValue)
    expect(node.setCanFocus).toHaveBeenCalledWith(newValue)
  })

  test("should set canTarget", () => {
    const newValue = true
    widget.set("canTarget", newValue)
    expect(node.setCanTarget).toHaveBeenCalledWith(newValue)
  })

  test("should set cssClasses", () => {
    const newValue = "New String"
    widget.set("cssClasses", newValue)
    expect(node.setCssClasses).toHaveBeenCalledWith(newValue)
  })

  test("should set cursor", () => {
    const newValue = new Gdk.Cursor()
    widget.set("cursor", newValue)
    expect(node.setCursor).toHaveBeenCalledWith(newValue)
  })

  test("should set focusOnClick", () => {
    const newValue = true
    widget.set("focusOnClick", newValue)
    expect(node.setFocusOnClick).toHaveBeenCalledWith(newValue)
  })

  test("should set focusable", () => {
    const newValue = true
    widget.set("focusable", newValue)
    expect(node.setFocusable).toHaveBeenCalledWith(newValue)
  })

  test("should set halign", () => {
    const newValue = Gtk.Align.FILL
    widget.set("halign", newValue)
    expect(node.setHalign).toHaveBeenCalledWith(newValue)
  })

  test("should set hasTooltip", () => {
    const newValue = true
    widget.set("hasTooltip", newValue)
    expect(node.setHasTooltip).toHaveBeenCalledWith(newValue)
  })

  test("should set heightRequest", () => {
    const newValue = 42
    widget.set("heightRequest", newValue)
    expect(node.heightRequest).toBe(newValue)
  })

  test("should set hexpand", () => {
    const newValue = true
    widget.set("hexpand", newValue)
    expect(node.setHexpand).toHaveBeenCalledWith(newValue)
  })

  test("should set hexpandSet", () => {
    const newValue = true
    widget.set("hexpandSet", newValue)
    expect(node.setHexpandSet).toHaveBeenCalledWith(newValue)
  })

  test("should set layoutManager", () => {
    const newValue = new Gtk.LayoutManager()
    widget.set("layoutManager", newValue)
    expect(node.setLayoutManager).toHaveBeenCalledWith(newValue)
  })

  test("should set marginBottom", () => {
    const newValue = 42
    widget.set("marginBottom", newValue)
    expect(node.setMarginBottom).toHaveBeenCalledWith(newValue)
  })

  test("should set marginEnd", () => {
    const newValue = 42
    widget.set("marginEnd", newValue)
    expect(node.setMarginEnd).toHaveBeenCalledWith(newValue)
  })

  test("should set marginStart", () => {
    const newValue = 42
    widget.set("marginStart", newValue)
    expect(node.setMarginStart).toHaveBeenCalledWith(newValue)
  })

  test("should set marginTop", () => {
    const newValue = 42
    widget.set("marginTop", newValue)
    expect(node.setMarginTop).toHaveBeenCalledWith(newValue)
  })

  test("should set name", () => {
    const newValue = "New String"
    widget.set("name", newValue)
    expect(node.setName).toHaveBeenCalledWith(newValue)
  })

  test("should set opacity", () => {
    const newValue = 42
    widget.set("opacity", newValue)
    expect(node.setOpacity).toHaveBeenCalledWith(newValue)
  })

  test("should set overflow", () => {
    const newValue = Gtk.Overflow.VISIBLE
    widget.set("overflow", newValue)
    expect(node.setOverflow).toHaveBeenCalledWith(newValue)
  })

  test("should set receivesDefault", () => {
    const newValue = true
    widget.set("receivesDefault", newValue)
    expect(node.setReceivesDefault).toHaveBeenCalledWith(newValue)
  })

  test("should set sensitive", () => {
    const newValue = true
    widget.set("sensitive", newValue)
    expect(node.setSensitive).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipMarkup", () => {
    const newValue = "New String"
    widget.set("tooltipMarkup", newValue)
    expect(node.setTooltipMarkup).toHaveBeenCalledWith(newValue)
  })

  test("should set tooltipText", () => {
    const newValue = "New String"
    widget.set("tooltipText", newValue)
    expect(node.setTooltipText).toHaveBeenCalledWith(newValue)
  })

  test("should set valign", () => {
    const newValue = Gtk.Align.FILL
    widget.set("valign", newValue)
    expect(node.setValign).toHaveBeenCalledWith(newValue)
  })

  test("should set vexpand", () => {
    const newValue = true
    widget.set("vexpand", newValue)
    expect(node.setVexpand).toHaveBeenCalledWith(newValue)
  })

  test("should set vexpandSet", () => {
    const newValue = true
    widget.set("vexpandSet", newValue)
    expect(node.setVexpandSet).toHaveBeenCalledWith(newValue)
  })

  test("should set visible", () => {
    const newValue = true
    widget.set("visible", newValue)
    expect(node.setVisible).toHaveBeenCalledWith(newValue)
  })

  test("should set widthRequest", () => {
    const newValue = 42
    widget.set("widthRequest", newValue)
    expect(node.widthRequest).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
