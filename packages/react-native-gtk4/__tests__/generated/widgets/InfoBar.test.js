import { InfoBar } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("InfoBar", () => {
  let widget

  beforeEach(() => {
    widget = new InfoBar({}, InfoBar.createNode({}))
  })

  test("should set messageType", () => {
    const newValue = Gtk.MessageType.INFO
    widget.set("messageType", newValue)
    expect(widget.node.setMessageType).toHaveBeenCalledWith(newValue)
  })

  test("should set revealed", () => {
    const newValue = true
    widget.set("revealed", newValue)
    expect(widget.node.setRevealed).toHaveBeenCalledWith(newValue)
  })

  test("should set showCloseButton", () => {
    const newValue = true
    widget.set("showCloseButton", newValue)
    expect(widget.node.setShowCloseButton).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onClose", () => {
    const callback = jest.fn()

    widget.set("onClose", callback)

    const handler = widget.handlers["close"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("close", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onResponse", () => {
    const callback = jest.fn()

    widget.set("onResponse", callback)

    const handler = widget.handlers["response"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "response",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
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

  test("should connect onNotifyRevealed", () => {
    const callback = jest.fn()

    widget.set("onNotifyRevealed", callback)

    const handler = widget.handlers["notify::revealed"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::revealed",
      expect.any(Function)
    )
  })

  test("should connect onNotifyShowCloseButton", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowCloseButton", callback)

    const handler = widget.handlers["notify::show-close-button"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-close-button",
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
