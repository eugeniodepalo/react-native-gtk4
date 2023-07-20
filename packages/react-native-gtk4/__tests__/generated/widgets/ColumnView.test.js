import { ColumnView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ColumnView", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ColumnView.mockImplementation(() => node)
    node = new Gtk.ColumnView()
    widget = new ColumnView({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set enableRubberband", () => {
    const newValue = true
    widget.set("enableRubberband", newValue)
    expect(node.setEnableRubberband).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.SelectionModel()
    widget.set("model", newValue)
    expect(node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set reorderable", () => {
    const newValue = true
    widget.set("reorderable", newValue)
    expect(node.setReorderable).toHaveBeenCalledWith(newValue)
  })

  test("should set showColumnSeparators", () => {
    const newValue = true
    widget.set("showColumnSeparators", newValue)
    expect(node.setShowColumnSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set showRowSeparators", () => {
    const newValue = true
    widget.set("showRowSeparators", newValue)
    expect(node.setShowRowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set singleClickActivate", () => {
    const newValue = true
    widget.set("singleClickActivate", newValue)
    expect(node.setSingleClickActivate).toHaveBeenCalledWith(newValue)
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
