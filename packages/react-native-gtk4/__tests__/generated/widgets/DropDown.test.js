import { DropDown } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"
import Gio from "@girs/node-gio-2.0"

describe("DropDown", () => {
  let widget

  beforeEach(() => {
    widget = new DropDown({})
  })

  test("should set enableSearch", () => {
    const newValue = true
    widget.set("enableSearch", newValue)
    expect(widget.node.setEnableSearch).toHaveBeenCalledWith(newValue)
  })

  test("should set expression", () => {
    const newValue = new Gtk.Expression()
    widget.set("expression", newValue)
    expect(widget.node.setExpression).toHaveBeenCalledWith(newValue)
  })

  test("should set factory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("factory", newValue)
    expect(widget.node.setFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set listFactory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("listFactory", newValue)
    expect(widget.node.setListFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gio.ListModel()
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set selected", () => {
    const newValue = 1
    widget.set("selected", newValue)
    expect(widget.node.setSelected).toHaveBeenCalledWith(newValue)
  })

  test("should set showArrow", () => {
    const newValue = true
    widget.set("showArrow", newValue)
    expect(widget.node.setShowArrow).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()

    widget.set("onActivate", callback)

    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyEnableSearch", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableSearch", callback)

    const handler = widget.handlers["notify::enable-search"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-search",
      expect.any(Function)
    )
  })

  test("should connect onNotifyExpression", () => {
    const callback = jest.fn()

    widget.set("onNotifyExpression", callback)

    const handler = widget.handlers["notify::expression"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::expression",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFactory", () => {
    const callback = jest.fn()

    widget.set("onNotifyFactory", callback)

    const handler = widget.handlers["notify::factory"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::factory",
      expect.any(Function)
    )
  })

  test("should connect onNotifyListFactory", () => {
    const callback = jest.fn()

    widget.set("onNotifyListFactory", callback)

    const handler = widget.handlers["notify::list-factory"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::list-factory",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyModel", callback)

    const handler = widget.handlers["notify::model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::model",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelected", () => {
    const callback = jest.fn()

    widget.set("onNotifySelected", callback)

    const handler = widget.handlers["notify::selected"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selected",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectedItem", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectedItem", callback)

    const handler = widget.handlers["notify::selected-item"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selected-item",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowArrow", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowArrow", callback)

    const handler = widget.handlers["notify::show-arrow"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-arrow",
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
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accessible-role",
      expect.any(Function)
    )
  })
})
