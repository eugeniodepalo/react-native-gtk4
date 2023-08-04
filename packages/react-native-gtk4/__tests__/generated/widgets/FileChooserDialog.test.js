import { FileChooserDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FileChooserDialog", () => {
  let widget

  beforeEach(() => {
    widget = new FileChooserDialog({}, FileChooserDialog.createNode({}))
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set action", () => {
    const newValue = Gtk.FileChooserAction.OPEN
    widget.set("action", newValue)
    expect(widget.node.setAction).toHaveBeenCalledWith(newValue)
  })

  test("should set createFolders", () => {
    const newValue = true
    widget.set("createFolders", newValue)
    expect(widget.node.setCreateFolders).toHaveBeenCalledWith(newValue)
  })

  test("should set filter", () => {
    const newValue = new Gtk.FileFilter()
    widget.set("filter", newValue)
    expect(widget.node.setFilter).toHaveBeenCalledWith(newValue)
  })

  test("should set selectMultiple", () => {
    const newValue = true
    widget.set("selectMultiple", newValue)
    expect(widget.node.setSelectMultiple).toHaveBeenCalledWith(newValue)
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

  test("should connect onNotifyAction", () => {
    const callback = jest.fn()

    widget.set("onNotifyAction", callback)

    const handler = widget.handlers["notify::action"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::action",
      expect.any(Function)
    )
  })

  test("should connect onNotifyCreateFolders", () => {
    const callback = jest.fn()

    widget.set("onNotifyCreateFolders", callback)

    const handler = widget.handlers["notify::create-folders"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::create-folders",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFilter", () => {
    const callback = jest.fn()

    widget.set("onNotifyFilter", callback)

    const handler = widget.handlers["notify::filter"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::filter",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFilters", () => {
    const callback = jest.fn()

    widget.set("onNotifyFilters", callback)

    const handler = widget.handlers["notify::filters"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::filters",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectMultiple", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectMultiple", callback)

    const handler = widget.handlers["notify::select-multiple"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::select-multiple",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShortcutFolders", () => {
    const callback = jest.fn()

    widget.set("onNotifyShortcutFolders", callback)

    const handler = widget.handlers["notify::shortcut-folders"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::shortcut-folders",
      expect.any(Function)
    )
  })
})
