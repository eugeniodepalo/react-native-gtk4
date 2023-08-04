import { FlowBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FlowBox", () => {
  let widget

  beforeEach(() => {
    widget = new FlowBox({}, FlowBox.createNode({}))
  })

  test("should set acceptUnpairedRelease", () => {
    const newValue = true
    widget.set("acceptUnpairedRelease", newValue)
    expect(widget.node.acceptUnpairedRelease).toBe(newValue)
  })

  test("should set activateOnSingleClick", () => {
    const newValue = true
    widget.set("activateOnSingleClick", newValue)
    expect(widget.node.setActivateOnSingleClick).toHaveBeenCalledWith(newValue)
  })

  test("should set columnSpacing", () => {
    const newValue = 1
    widget.set("columnSpacing", newValue)
    expect(widget.node.setColumnSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set homogeneous", () => {
    const newValue = true
    widget.set("homogeneous", newValue)
    expect(widget.node.setHomogeneous).toHaveBeenCalledWith(newValue)
  })

  test("should set maxChildrenPerLine", () => {
    const newValue = 1
    widget.set("maxChildrenPerLine", newValue)
    expect(widget.node.setMaxChildrenPerLine).toHaveBeenCalledWith(newValue)
  })

  test("should set minChildrenPerLine", () => {
    const newValue = 1
    widget.set("minChildrenPerLine", newValue)
    expect(widget.node.setMinChildrenPerLine).toHaveBeenCalledWith(newValue)
  })

  test("should set rowSpacing", () => {
    const newValue = 1
    widget.set("rowSpacing", newValue)
    expect(widget.node.setRowSpacing).toHaveBeenCalledWith(newValue)
  })

  test("should set selectionMode", () => {
    const newValue = Gtk.SelectionMode.NONE
    widget.set("selectionMode", newValue)
    expect(widget.node.setSelectionMode).toHaveBeenCalledWith(newValue)
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

  test("should connect onActivateCursorChild", () => {
    const callback = jest.fn()

    widget.set("onActivateCursorChild", callback)

    const handler = widget.handlers["activate-cursor-child"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-cursor-child",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChildActivated", () => {
    const callback = jest.fn()

    widget.set("onChildActivated", callback)

    const handler = widget.handlers["child-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "child-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveCursor", () => {
    const callback = jest.fn()

    widget.set("onMoveCursor", callback)

    const handler = widget.handlers["move-cursor"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-cursor",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectAll", () => {
    const callback = jest.fn()

    widget.set("onSelectAll", callback)

    const handler = widget.handlers["select-all"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "select-all",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSelectedChildrenChanged", () => {
    const callback = jest.fn()

    widget.set("onSelectedChildrenChanged", callback)

    const handler = widget.handlers["selected-children-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "selected-children-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleCursorChild", () => {
    const callback = jest.fn()

    widget.set("onToggleCursorChild", callback)

    const handler = widget.handlers["toggle-cursor-child"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-cursor-child",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onUnselectAll", () => {
    const callback = jest.fn()

    widget.set("onUnselectAll", callback)

    const handler = widget.handlers["unselect-all"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "unselect-all",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAcceptUnpairedRelease", () => {
    const callback = jest.fn()

    widget.set("onNotifyAcceptUnpairedRelease", callback)

    const handler = widget.handlers["notify::accept-unpaired-release"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::accept-unpaired-release",
      expect.any(Function)
    )
  })

  test("should connect onNotifyActivateOnSingleClick", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivateOnSingleClick", callback)

    const handler = widget.handlers["notify::activate-on-single-click"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activate-on-single-click",
      expect.any(Function)
    )
  })

  test("should connect onNotifyColumnSpacing", () => {
    const callback = jest.fn()

    widget.set("onNotifyColumnSpacing", callback)

    const handler = widget.handlers["notify::column-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::column-spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHomogeneous", () => {
    const callback = jest.fn()

    widget.set("onNotifyHomogeneous", callback)

    const handler = widget.handlers["notify::homogeneous"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::homogeneous",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxChildrenPerLine", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxChildrenPerLine", callback)

    const handler = widget.handlers["notify::max-children-per-line"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-children-per-line",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMinChildrenPerLine", () => {
    const callback = jest.fn()

    widget.set("onNotifyMinChildrenPerLine", callback)

    const handler = widget.handlers["notify::min-children-per-line"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::min-children-per-line",
      expect.any(Function)
    )
  })

  test("should connect onNotifyRowSpacing", () => {
    const callback = jest.fn()

    widget.set("onNotifyRowSpacing", callback)

    const handler = widget.handlers["notify::row-spacing"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::row-spacing",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectionMode", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectionMode", callback)

    const handler = widget.handlers["notify::selection-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selection-mode",
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
})
