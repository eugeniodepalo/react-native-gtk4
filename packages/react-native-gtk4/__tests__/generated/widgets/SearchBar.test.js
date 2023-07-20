import { SearchBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SearchBar", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.SearchBar.mockImplementation(() => node)
    node = new Gtk.SearchBar()
    widget = new SearchBar({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set keyCaptureWidget", () => {
    const newValue = new Gtk.Widget()
    widget.set("keyCaptureWidget", newValue)
    expect(node.setKeyCaptureWidget).toHaveBeenCalledWith(newValue)
  })

  test("should set searchModeEnabled", () => {
    const newValue = true
    widget.set("searchModeEnabled", newValue)
    expect(node.searchModeEnabled).toBe(newValue)
  })

  test("should set showCloseButton", () => {
    const newValue = true
    widget.set("showCloseButton", newValue)
    expect(node.setShowCloseButton).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
