import { ListView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListView", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ListView.mockImplementation(() => node)
    node = new Gtk.ListView()
    widget = new ListView({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set enableRubberband", () => {
    const newValue = true
    widget.set("enableRubberband", newValue)
    expect(node.setEnableRubberband).toHaveBeenCalledWith(newValue)
  })

  test("should set factory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("factory", newValue)
    expect(node.setFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.SelectionModel()
    widget.set("model", newValue)
    expect(node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set showSeparators", () => {
    const newValue = true
    widget.set("showSeparators", newValue)
    expect(node.setShowSeparators).toHaveBeenCalledWith(newValue)
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(node.setOrientation).toHaveBeenCalledWith(newValue)
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
