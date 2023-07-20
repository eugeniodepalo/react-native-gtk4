import { ScrolledWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ScrolledWindow", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ScrolledWindow.mockImplementation(() => node)
    node = new Gtk.ScrolledWindow()
    widget = new ScrolledWindow({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(node.setHasFrame).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollbarPolicy", () => {
    const newValue = Gtk.PolicyType.ALWAYS
    widget.set("hscrollbarPolicy", newValue)
    expect(node.hscrollbarPolicy).toBe(newValue)
  })

  test("should set kineticScrolling", () => {
    const newValue = true
    widget.set("kineticScrolling", newValue)
    expect(node.setKineticScrolling).toHaveBeenCalledWith(newValue)
  })

  test("should set maxContentHeight", () => {
    const newValue = 42
    widget.set("maxContentHeight", newValue)
    expect(node.setMaxContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set maxContentWidth", () => {
    const newValue = 42
    widget.set("maxContentWidth", newValue)
    expect(node.setMaxContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set minContentHeight", () => {
    const newValue = 42
    widget.set("minContentHeight", newValue)
    expect(node.setMinContentHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set minContentWidth", () => {
    const newValue = 42
    widget.set("minContentWidth", newValue)
    expect(node.setMinContentWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set overlayScrolling", () => {
    const newValue = true
    widget.set("overlayScrolling", newValue)
    expect(node.setOverlayScrolling).toHaveBeenCalledWith(newValue)
  })

  test("should set propagateNaturalHeight", () => {
    const newValue = true
    widget.set("propagateNaturalHeight", newValue)
    expect(node.setPropagateNaturalHeight).toHaveBeenCalledWith(newValue)
  })

  test("should set propagateNaturalWidth", () => {
    const newValue = true
    widget.set("propagateNaturalWidth", newValue)
    expect(node.setPropagateNaturalWidth).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollbarPolicy", () => {
    const newValue = Gtk.PolicyType.ALWAYS
    widget.set("vscrollbarPolicy", newValue)
    expect(node.vscrollbarPolicy).toBe(newValue)
  })

  test("should set windowPlacement", () => {
    const newValue = Gtk.CornerType.TOP_LEFT
    widget.set("windowPlacement", newValue)
    expect(node.windowPlacement).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
