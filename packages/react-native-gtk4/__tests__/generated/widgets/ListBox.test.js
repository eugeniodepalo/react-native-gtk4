import { ListBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ListBox", () => {
  let widget

  beforeEach(() => {
    widget = new ListBox({})
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

  test("should set selectionMode", () => {
    const newValue = Gtk.SelectionMode.NONE
    widget.set("selectionMode", newValue)
    expect(widget.node.setSelectionMode).toHaveBeenCalledWith(newValue)
  })

  test("should set showSeparators", () => {
    const newValue = true
    widget.set("showSeparators", newValue)
    expect(widget.node.setShowSeparators).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivateCursorRow", () => {
    const callback = jest.fn()

    widget.set("onActivateCursorRow", callback)

    const handler = widget.handlers["activate-cursor-row"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "activate-cursor-row",
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

  test("should connect onRowActivated", () => {
    const callback = jest.fn()

    widget.set("onRowActivated", callback)

    const handler = widget.handlers["row-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "row-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRowSelected", () => {
    const callback = jest.fn()

    widget.set("onRowSelected", callback)

    const handler = widget.handlers["row-selected"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "row-selected",
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

  test("should connect onSelectedRowsChanged", () => {
    const callback = jest.fn()

    widget.set("onSelectedRowsChanged", callback)

    const handler = widget.handlers["selected-rows-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "selected-rows-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onToggleCursorRow", () => {
    const callback = jest.fn()

    widget.set("onToggleCursorRow", callback)

    const handler = widget.handlers["toggle-cursor-row"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "toggle-cursor-row",
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
