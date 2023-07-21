import { AppChooserButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("AppChooserButton", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.AppChooserButton()
    Gtk.AppChooserButton.mockImplementation(() => node)
    widget = new AppChooserButton({})
  })

  test("should set construct only props", () => {
    const props = {
      contentType: "Some String",
    }

    new AppChooserButton(props)

    expect(Gtk.AppChooserButton).toHaveBeenCalledWith(props)
  })

  test("should set heading", () => {
    const newValue = "Some String"
    widget.set("heading", newValue)
    expect(node.setHeading).toHaveBeenCalledWith(newValue)
  })

  test("should set modal", () => {
    const newValue = true
    widget.set("modal", newValue)
    expect(node.setModal).toHaveBeenCalledWith(newValue)
  })

  test("should set showDefaultItem", () => {
    const newValue = true
    widget.set("showDefaultItem", newValue)
    expect(node.setShowDefaultItem).toHaveBeenCalledWith(newValue)
  })

  test("should set showDialogItem", () => {
    const newValue = true
    widget.set("showDialogItem", newValue)
    expect(node.setShowDialogItem).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onActivate", () => {
    const callback = jest.fn()
    widget.set("onActivate", callback)
    const handler = widget.handlers["activate"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("activate", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onChanged", () => {
    const callback = jest.fn()
    widget.set("onChanged", callback)
    const handler = widget.handlers["changed"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCustomItemActivated", () => {
    const callback = jest.fn()
    widget.set("onCustomItemActivated", callback)
    const handler = widget.handlers["custom-item-activated"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith(
      "custom-item-activated",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyHeading", () => {
    const callback = jest.fn()
    widget.set("onNotifyHeading", callback)
    const handler = widget.handlers["notify::heading"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::heading",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModal", () => {
    const callback = jest.fn()
    widget.set("onNotifyModal", callback)
    const handler = widget.handlers["notify::modal"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::modal", expect.any(Function))
  })

  test("should connect onNotifyShowDefaultItem", () => {
    const callback = jest.fn()
    widget.set("onNotifyShowDefaultItem", callback)
    const handler = widget.handlers["notify::show-default-item"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::show-default-item",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowDialogItem", () => {
    const callback = jest.fn()
    widget.set("onNotifyShowDialogItem", callback)
    const handler = widget.handlers["notify::show-dialog-item"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::show-dialog-item",
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

  test("should connect onNotifyContentType", () => {
    const callback = jest.fn()
    widget.set("onNotifyContentType", callback)
    const handler = widget.handlers["notify::content-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::content-type",
      expect.any(Function)
    )
  })
})
