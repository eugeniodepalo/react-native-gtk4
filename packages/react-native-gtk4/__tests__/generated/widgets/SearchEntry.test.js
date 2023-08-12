import { SearchEntry } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SearchEntry", () => {
  let widget

  beforeEach(() => {
    widget = new SearchEntry({}, SearchEntry.createNode({}))
  })

  test("should set activatesDefault", () => {
    const newValue = true
    widget.set("activatesDefault", newValue)
    expect(widget.node.activatesDefault).toBe(newValue)
  })

  test("should set placeholderText", () => {
    const newValue = "Some String"
    widget.set("placeholderText", newValue)
    expect(widget.node.placeholderText).toBe(newValue)
  })

  test("should set searchDelay", () => {
    const newValue = 1
    widget.set("searchDelay", newValue)
    expect(widget.node.setSearchDelay).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set editable", () => {
    const newValue = true
    widget.set("editable", newValue)
    expect(widget.node.setEditable).toHaveBeenCalledWith(newValue)
  })

  test("should set enableUndo", () => {
    const newValue = true
    widget.set("enableUndo", newValue)
    expect(widget.node.setEnableUndo).toHaveBeenCalledWith(newValue)
  })

  test("should set maxWidthChars", () => {
    const newValue = 1
    widget.set("maxWidthChars", newValue)
    expect(widget.node.setMaxWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.setText).toHaveBeenCalledWith(newValue)
  })

  test("should set widthChars", () => {
    const newValue = 1
    widget.set("widthChars", newValue)
    expect(widget.node.setWidthChars).toHaveBeenCalledWith(newValue)
  })

  test("should set xalign", () => {
    const newValue = 1
    widget.set("xalign", newValue)
    expect(widget.node.xalign).toBe(newValue)
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

  test("should connect onNextMatch", () => {
    const callback = jest.fn()

    widget.set("onNextMatch", callback)

    const handler = widget.handlers["next-match"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "next-match",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPreviousMatch", () => {
    const callback = jest.fn()

    widget.set("onPreviousMatch", callback)

    const handler = widget.handlers["previous-match"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "previous-match",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSearchChanged", () => {
    const callback = jest.fn()

    widget.set("onSearchChanged", callback)

    const handler = widget.handlers["search-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "search-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onSearchStarted", () => {
    const callback = jest.fn()

    widget.set("onSearchStarted", callback)

    const handler = widget.handlers["search-started"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "search-started",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onStopSearch", () => {
    const callback = jest.fn()

    widget.set("onStopSearch", callback)

    const handler = widget.handlers["stop-search"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "stop-search",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChanged", () => {
    const callback = jest.fn()

    widget.set("onChanged", callback)

    const handler = widget.handlers["changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onDeleteText", () => {
    const callback = jest.fn()

    widget.set("onDeleteText", callback)

    const handler = widget.handlers["delete-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "delete-text",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInsertText", () => {
    const callback = jest.fn()

    widget.set("onInsertText", callback)

    const handler = widget.handlers["insert-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "insert-text",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyActivatesDefault", () => {
    const callback = jest.fn()

    widget.set("onNotifyActivatesDefault", callback)

    const handler = widget.handlers["notify::activates-default"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::activates-default",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPlaceholderText", () => {
    const callback = jest.fn()

    widget.set("onNotifyPlaceholderText", callback)

    const handler = widget.handlers["notify::placeholder-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::placeholder-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifySearchDelay", () => {
    const callback = jest.fn()

    widget.set("onNotifySearchDelay", callback)

    const handler = widget.handlers["notify::search-delay"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::search-delay",
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

  test("should connect onNotifyCursorPosition", () => {
    const callback = jest.fn()

    widget.set("onNotifyCursorPosition", callback)

    const handler = widget.handlers["notify::cursor-position"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::cursor-position",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEditable", () => {
    const callback = jest.fn()

    widget.set("onNotifyEditable", callback)

    const handler = widget.handlers["notify::editable"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editable",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEnableUndo", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnableUndo", callback)

    const handler = widget.handlers["notify::enable-undo"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enable-undo",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMaxWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyMaxWidthChars", callback)

    const handler = widget.handlers["notify::max-width-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::max-width-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectionBound", () => {
    const callback = jest.fn()

    widget.set("onNotifySelectionBound", callback)

    const handler = widget.handlers["notify::selection-bound"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::selection-bound",
      expect.any(Function)
    )
  })

  test("should connect onNotifyText", () => {
    const callback = jest.fn()

    widget.set("onNotifyText", callback)

    const handler = widget.handlers["notify::text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::text",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWidthChars", () => {
    const callback = jest.fn()

    widget.set("onNotifyWidthChars", callback)

    const handler = widget.handlers["notify::width-chars"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::width-chars",
      expect.any(Function)
    )
  })

  test("should connect onNotifyXalign", () => {
    const callback = jest.fn()

    widget.set("onNotifyXalign", callback)

    const handler = widget.handlers["notify::xalign"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::xalign",
      expect.any(Function)
    )
  })
})
