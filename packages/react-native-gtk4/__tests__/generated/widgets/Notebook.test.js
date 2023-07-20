import { Notebook } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Notebook", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Notebook.mockImplementation(() => node)
    node = new Gtk.Notebook()
    widget = new Notebook({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set enablePopup", () => {
    const newValue = true
    widget.set("enablePopup", newValue)
    expect(node.enablePopup).toBe(newValue)
  })

  test("should set groupName", () => {
    const newValue = "New String"
    widget.set("groupName", newValue)
    expect(node.setGroupName).toHaveBeenCalledWith(newValue)
  })

  test("should set page", () => {
    const newValue = 42
    widget.set("page", newValue)
    expect(node.page).toBe(newValue)
  })

  test("should set scrollable", () => {
    const newValue = true
    widget.set("scrollable", newValue)
    expect(node.setScrollable).toHaveBeenCalledWith(newValue)
  })

  test("should set showBorder", () => {
    const newValue = true
    widget.set("showBorder", newValue)
    expect(node.setShowBorder).toHaveBeenCalledWith(newValue)
  })

  test("should set showTabs", () => {
    const newValue = true
    widget.set("showTabs", newValue)
    expect(node.setShowTabs).toHaveBeenCalledWith(newValue)
  })

  test("should set tabPos", () => {
    const newValue = Gtk.PositionType.LEFT
    widget.set("tabPos", newValue)
    expect(node.setTabPos).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
