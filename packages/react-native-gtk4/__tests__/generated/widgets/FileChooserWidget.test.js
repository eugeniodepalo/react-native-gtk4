import { FileChooserWidget } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("FileChooserWidget", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.FileChooserWidget()
    Gtk.FileChooserWidget.mockImplementation(() => node)
    widget = new FileChooserWidget({})
  })

  test("should set searchMode", () => {
    const newValue = true
    widget.set("searchMode", newValue)
    expect(node.searchMode).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set action", () => {
    const newValue = Gtk.FileChooserAction.OPEN
    widget.set("action", newValue)
    expect(node.setAction).toHaveBeenCalledWith(newValue)
  })

  test("should set createFolders", () => {
    const newValue = true
    widget.set("createFolders", newValue)
    expect(node.setCreateFolders).toHaveBeenCalledWith(newValue)
  })

  test("should set filter", () => {
    const newValue = new Gtk.FileFilter()
    widget.set("filter", newValue)
    expect(node.setFilter).toHaveBeenCalledWith(newValue)
  })

  test("should set selectMultiple", () => {
    const newValue = true
    widget.set("selectMultiple", newValue)
    expect(node.setSelectMultiple).toHaveBeenCalledWith(newValue)
  })

  test("should connect onDesktopFolder", () => {
    const callback = jest.fn()
    widget.set("onDesktopFolder", callback)
    const handler = widget.handlers["desktop-folder"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("desktop-folder", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDownFolder", () => {
    const callback = jest.fn()
    widget.set("onDownFolder", callback)
    const handler = widget.handlers["down-folder"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("down-folder", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onHomeFolder", () => {
    const callback = jest.fn()
    widget.set("onHomeFolder", callback)
    const handler = widget.handlers["home-folder"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("home-folder", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onLocationPopup", () => {
    const callback = jest.fn()
    widget.set("onLocationPopup", callback)
    const handler = widget.handlers["location-popup"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("location-popup", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onLocationPopupOnPaste", () => {
    const callback = jest.fn()
    widget.set("onLocationPopupOnPaste", callback)
    const handler = widget.handlers["location-popup-on-paste"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "location-popup-on-paste",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onLocationTogglePopup", () => {
    const callback = jest.fn()
    widget.set("onLocationTogglePopup", callback)
    const handler = widget.handlers["location-toggle-popup"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "location-toggle-popup",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPlacesShortcut", () => {
    const callback = jest.fn()
    widget.set("onPlacesShortcut", callback)
    const handler = widget.handlers["places-shortcut"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "places-shortcut",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onQuickBookmark", () => {
    const callback = jest.fn()
    widget.set("onQuickBookmark", callback)
    const handler = widget.handlers["quick-bookmark"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("quick-bookmark", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRecentShortcut", () => {
    const callback = jest.fn()
    widget.set("onRecentShortcut", callback)
    const handler = widget.handlers["recent-shortcut"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "recent-shortcut",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSearchShortcut", () => {
    const callback = jest.fn()
    widget.set("onSearchShortcut", callback)
    const handler = widget.handlers["search-shortcut"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "search-shortcut",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onShowHidden", () => {
    const callback = jest.fn()
    widget.set("onShowHidden", callback)
    const handler = widget.handlers["show-hidden"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("show-hidden", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onUpFolder", () => {
    const callback = jest.fn()
    widget.set("onUpFolder", callback)
    const handler = widget.handlers["up-folder"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("up-folder", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifySearchMode", () => {
    const callback = jest.fn()
    widget.set("onNotifySearchMode", callback)
    const handler = widget.handlers["notify::search-mode"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::search-mode",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowTime", () => {
    const callback = jest.fn()
    widget.set("onNotifyShowTime", callback)
    const handler = widget.handlers["notify::show-time"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::show-time",
      expect.any(Function)
    )
  })

  test("should connect onNotifySubtitle", () => {
    const callback = jest.fn()
    widget.set("onNotifySubtitle", callback)
    const handler = widget.handlers["notify::subtitle"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::subtitle",
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

  test("should connect onNotifyAction", () => {
    const callback = jest.fn()
    widget.set("onNotifyAction", callback)
    const handler = widget.handlers["notify::action"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::action", expect.any(Function))
  })

  test("should connect onNotifyCreateFolders", () => {
    const callback = jest.fn()
    widget.set("onNotifyCreateFolders", callback)
    const handler = widget.handlers["notify::create-folders"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith("notify::filter", expect.any(Function))
  })

  test("should connect onNotifyFilters", () => {
    const callback = jest.fn()
    widget.set("onNotifyFilters", callback)
    const handler = widget.handlers["notify::filters"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
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
    expect(node.on).toHaveBeenCalledWith(
      "notify::shortcut-folders",
      expect.any(Function)
    )
  })
})
