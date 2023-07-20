import { ListBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListBox", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.ListBox.mockImplementation(() => node)
    node = new Gtk.ListBox()
    widget = new ListBox({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set acceptUnpairedRelease", () => {
    const newValue = true
    widget.set("acceptUnpairedRelease", newValue)
    expect(node.acceptUnpairedRelease).toBe(newValue)
  })

  test("should set activateOnSingleClick", () => {
    const newValue = true
    widget.set("activateOnSingleClick", newValue)
    expect(node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue)
  })

  test("should set selectionMode", () => {
    const newValue = Gtk.SelectionMode.NONE
    widget.set("selectionMode", newValue)
    expect(node.setSelectionMode).toHaveBeenCalledWith(newValue)
  })

  test("should set showSeparators", () => {
    const newValue = true
    widget.set("showSeparators", newValue)
    expect(node.setShowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
