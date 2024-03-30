import { ListView } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListView", () => {
  let widget

  beforeEach(() => {
    widget = new ListView({}, ListView.createNode({}))
  })

  test("should set enableRubberband", () => {
    const newValue = true
    widget.set("enableRubberband", newValue)
    expect(widget.node.setEnableRubberband).toHaveBeenCalledWith(newValue)
  })

  test("should set factory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("factory", newValue)
    expect(widget.node.setFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set headerFactory", () => {
    const newValue = new Gtk.ListItemFactory()
    widget.set("headerFactory", newValue)
    expect(widget.node.setHeaderFactory).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.SelectionModel()
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set showSeparators", () => {
    const newValue = true
    widget.set("showSeparators", newValue)
    expect(widget.node.setShowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set singleClickActivate", () => {
    const newValue = true
    widget.set("singleClickActivate", newValue)
    expect(widget.node.setSingleClickActivate).toHaveBeenCalledWith(newValue)
  })

  test("should set tabBehavior", () => {
    const newValue = Gtk.ListTabBehavior.ALL
    widget.set("tabBehavior", newValue)
    expect(widget.node.setTabBehavior).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should set hadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("hadjustment", newValue)
    expect(widget.node.setHadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set hscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("hscrollPolicy", newValue)
    expect(widget.node.setHscrollPolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set vadjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("vadjustment", newValue)
    expect(widget.node.setVadjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set vscrollPolicy", () => {
    const newValue = Gtk.ScrollablePolicy.MINIMUM
    widget.set("vscrollPolicy", newValue)
    expect(widget.node.setVscrollPolicy).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyEnableRubberband", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableRubberband", callback)

    const handler = widget.handlers["notify::enable-rubberband"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-rubberband",
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

  test("should connect onNotifyHeaderFactory", () => {
    const callback = jest.fn()

    widget.set("onNotifyHeaderFactory", callback)

    const handler = widget.handlers["notify::header-factory"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::header-factory",
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

  test("should connect onNotifyShowSeparators", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowSeparators", callback)

    const handler = widget.handlers["notify::show-separators"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-separators",
      expect.any(Function)
    )
  })

  test("should connect onNotifySingleClickActivate", () => {
    const callback = jest.fn()

    widget.set("onNotifySingleClickActivate", callback)

    const handler = widget.handlers["notify::single-click-activate"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::single-click-activate",
      expect.any(Function)
    )
  })

  test("should connect onNotifyTabBehavior", () => {
    const callback = jest.fn()

    widget.set("onNotifyTabBehavior", callback)

    const handler = widget.handlers["notify::tab-behavior"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::tab-behavior",
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

  test("should connect onNotifyOrientation", () => {
    const callback = jest.fn()

    widget.set("onNotifyOrientation", callback)

    const handler = widget.handlers["notify::orientation"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::orientation",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyHadjustment", callback)

    const handler = widget.handlers["notify::hadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyHscrollPolicy", callback)

    const handler = widget.handlers["notify::hscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::hscroll-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVadjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyVadjustment", callback)

    const handler = widget.handlers["notify::vadjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vadjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyVscrollPolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyVscrollPolicy", callback)

    const handler = widget.handlers["notify::vscroll-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::vscroll-policy",
      expect.any(Function)
    )
  })
})
