import { SearchEntry } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SearchEntry", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.SearchEntry.mockImplementation(() => node)
    node = new Gtk.SearchEntry()
    widget = new SearchEntry({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set activatesDefault", () => {
    const newValue = true
    widget.set("activatesDefault", newValue)
    expect(node.activatesDefault).toBe(newValue)
  })

  test("should set placeholderText", () => {
    const newValue = "New String"
    widget.set("placeholderText", newValue)
    expect(node.placeholderText).toBe(newValue)
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
