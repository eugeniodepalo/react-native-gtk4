import { TreeExpander } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("TreeExpander", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.TreeExpander()
    Gtk.TreeExpander.mockImplementation(() => node)
    widget = new TreeExpander({})
  })

  test("should set hideExpander", () => {
    const newValue = true
    widget.set("hideExpander", newValue)
    expect(node.setHideExpander).toHaveBeenCalledWith(newValue)
  })

  test("should set indentForDepth", () => {
    const newValue = true
    widget.set("indentForDepth", newValue)
    expect(node.setIndentForDepth).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()
    widget.set("onNotifyChild", callback)
    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::child", expect.any(Function))
  })

  test("should connect onNotifyHideExpander", () => {
    const callback = jest.fn()
    widget.set("onNotifyHideExpander", callback)
    const handler = widget.handlers["notify::hide-expander"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::hide-expander",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIndentForDepth", () => {
    const callback = jest.fn()
    widget.set("onNotifyIndentForDepth", callback)
    const handler = widget.handlers["notify::indent-for-depth"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::indent-for-depth",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIndentForIcon", () => {
    const callback = jest.fn()
    widget.set("onNotifyIndentForIcon", callback)
    const handler = widget.handlers["notify::indent-for-icon"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::indent-for-icon",
      expect.any(Function)
    )
  })

  test("should connect onNotifyItem", () => {
    const callback = jest.fn()
    widget.set("onNotifyItem", callback)
    const handler = widget.handlers["notify::item"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::item", expect.any(Function))
  })

  test("should connect onNotifyListRow", () => {
    const callback = jest.fn()
    widget.set("onNotifyListRow", callback)
    const handler = widget.handlers["notify::list-row"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::list-row",
      expect.any(Function)
    )
  })

  test("should connect onNotifyAccessibleRole", () => {
    const callback = jest.fn()
    widget.set("onNotifyAccessibleRole", callback)
    const handler = widget.handlers["notify::accessible-role"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
