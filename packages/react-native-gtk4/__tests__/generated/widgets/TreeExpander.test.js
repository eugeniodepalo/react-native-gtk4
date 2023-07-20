import { TreeExpander } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("TreeExpander", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.TreeExpander.mockImplementation(() => node)
    node = new Gtk.TreeExpander()
    widget = new TreeExpander({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set indentForIcon", () => {
    const newValue = true
    widget.set("indentForIcon", newValue)
    expect(node.setIndentForIcon).toHaveBeenCalledWith(newValue)
  })

  test("should set listRow", () => {
    const newValue = new Gtk.TreeListRow()
    widget.set("listRow", newValue)
    expect(node.setListRow).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
