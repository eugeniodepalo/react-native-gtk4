import { PrintUnixDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PrintUnixDialog", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.PrintUnixDialog()
    Gtk.PrintUnixDialog.mockImplementation(() => node)
    widget = new PrintUnixDialog({})
  })

  test("should set currentPage", () => {
    const newValue = 1
    widget.set("currentPage", newValue)
    expect(node.setCurrentPage).toHaveBeenCalledWith(newValue)
  })

  test("should set embedPageSetup", () => {
    const newValue = true
    widget.set("embedPageSetup", newValue)
    expect(node.setEmbedPageSetup).toHaveBeenCalledWith(newValue)
  })

  test("should set hasSelection", () => {
    const newValue = true
    widget.set("hasSelection", newValue)
    expect(node.setHasSelection).toHaveBeenCalledWith(newValue)
  })

  test("should set manualCapabilities", () => {
    const newValue = Gtk.PrintCapabilities.PAGE_SET
    widget.set("manualCapabilities", newValue)
    expect(node.setManualCapabilities).toHaveBeenCalledWith(newValue)
  })

  test("should set pageSetup", () => {
    const newValue = new Gtk.PageSetup()
    widget.set("pageSetup", newValue)
    expect(node.setPageSetup).toHaveBeenCalledWith(newValue)
  })

  test("should set printSettings", () => {
    const newValue = new Gtk.PrintSettings()
    widget.set("printSettings", newValue)
    expect(node.printSettings).toBe(newValue)
  })

  test("should set supportSelection", () => {
    const newValue = true
    widget.set("supportSelection", newValue)
    expect(node.setSupportSelection).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyCurrentPage", () => {
    const callback = jest.fn()
    widget.set("onNotifyCurrentPage", callback)
    const handler = widget.handlers["notify::current-page"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::current-page",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEmbedPageSetup", () => {
    const callback = jest.fn()
    widget.set("onNotifyEmbedPageSetup", callback)
    const handler = widget.handlers["notify::embed-page-setup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::embed-page-setup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasSelection", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasSelection", callback)
    const handler = widget.handlers["notify::has-selection"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-selection",
      expect.any(Function)
    )
  })

  test("should connect onNotifyManualCapabilities", () => {
    const callback = jest.fn()
    widget.set("onNotifyManualCapabilities", callback)
    const handler = widget.handlers["notify::manual-capabilities"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::manual-capabilities",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPageSetup", () => {
    const callback = jest.fn()
    widget.set("onNotifyPageSetup", callback)
    const handler = widget.handlers["notify::page-setup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::page-setup",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPrintSettings", () => {
    const callback = jest.fn()
    widget.set("onNotifyPrintSettings", callback)
    const handler = widget.handlers["notify::print-settings"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::print-settings",
      expect.any(Function)
    )
  })

  test("should connect onNotifySelectedPrinter", () => {
    const callback = jest.fn()
    widget.set("onNotifySelectedPrinter", callback)
    const handler = widget.handlers["notify::selected-printer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::selected-printer",
      expect.any(Function)
    )
  })

  test("should connect onNotifySupportSelection", () => {
    const callback = jest.fn()
    widget.set("onNotifySupportSelection", callback)
    const handler = widget.handlers["notify::support-selection"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::support-selection",
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
