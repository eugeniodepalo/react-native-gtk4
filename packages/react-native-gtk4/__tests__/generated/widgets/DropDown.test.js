import { DropDown } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("DropDown", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.DropDown.mockImplementation(() => node)
    node = new Gtk.DropDown()
    widget = new DropDown({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set enableSearch", () => {
    const newValue = true
    widget.set("enableSearch", newValue)
    expect(node.setEnableSearch).toHaveBeenCalledWith(newValue)
  })

  test("should set expression", () => {
    const newValue = new Gtk.Expression()
    widget.set("expression", newValue)
    expect(node.setExpression).toHaveBeenCalledWith(newValue)
  })

  test("should set factory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("factory", newValue)
    expect(node.setFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set listFactory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("listFactory", newValue)
    expect(node.setListFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gio.ListModel()
    widget.set("model", newValue)
    expect(node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set selected", () => {
    const newValue = 42
    widget.set("selected", newValue)
    expect(node.setSelected).toHaveBeenCalledWith(newValue)
  })

  test("should set showArrow", () => {
    const newValue = true
    widget.set("showArrow", newValue)
    expect(node.setShowArrow).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
