import { MessageDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("MessageDialog", () => {
  let widget

  beforeEach(() => {
    widget = new MessageDialog({})
  })

  test("should set construct only props", () => {
    const props = {
      buttons: Gtk.ButtonsType.NONE,
    }

    new MessageDialog(props)

    expect(Gtk.MessageDialog).toHaveBeenCalledWith(props)
  })

  test("should set messageType", () => {
    const newValue = Gtk.MessageType.INFO
    widget.set("messageType", newValue)
    expect(widget.node.messageType).toBe(newValue)
  })

  test("should set secondaryText", () => {
    const newValue = "Some String"
    widget.set("secondaryText", newValue)
    expect(widget.node.secondaryText).toBe(newValue)
  })

  test("should set secondaryUseMarkup", () => {
    const newValue = true
    widget.set("secondaryUseMarkup", newValue)
    expect(widget.node.secondaryUseMarkup).toBe(newValue)
  })

  test("should set text", () => {
    const newValue = "Some String"
    widget.set("text", newValue)
    expect(widget.node.text).toBe(newValue)
  })

  test("should set useMarkup", () => {
    const newValue = true
    widget.set("useMarkup", newValue)
    expect(widget.node.useMarkup).toBe(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyButtons", () => {
    const callback = jest.fn()

    widget.set("onNotifyButtons", callback)

    const handler = widget.handlers["notify::buttons"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::buttons",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMessageArea", () => {
    const callback = jest.fn()

    widget.set("onNotifyMessageArea", callback)

    const handler = widget.handlers["notify::message-area"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::message-area",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMessageType", () => {
    const callback = jest.fn()

    widget.set("onNotifyMessageType", callback)

    const handler = widget.handlers["notify::message-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::message-type",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryText", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryText", callback)

    const handler = widget.handlers["notify::secondary-text"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-text",
      expect.any(Function)
    )
  })

  test("should connect onNotifySecondaryUseMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifySecondaryUseMarkup", callback)

    const handler = widget.handlers["notify::secondary-use-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::secondary-use-markup",
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

  test("should connect onNotifyUseMarkup", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseMarkup", callback)

    const handler = widget.handlers["notify::use-markup"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-markup",
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
