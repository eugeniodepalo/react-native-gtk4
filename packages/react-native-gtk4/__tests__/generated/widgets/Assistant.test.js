import { Assistant } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("Assistant", () => {
  let widget

  beforeEach(() => {
    widget = new Assistant({}, Assistant.createNode({}))
  })

  test("should set construct only props", () => {
    const props = {
      useHeaderBar: 1,
    }

    new Assistant(props, Assistant.createNode(props))

    expect(Gtk.Assistant).toHaveBeenCalledWith(props)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onApply", () => {
    const callback = jest.fn()

    widget.set("onApply", callback)

    const handler = widget.handlers["apply"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("apply", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onCancel", () => {
    const callback = jest.fn()

    widget.set("onCancel", callback)

    const handler = widget.handlers["cancel"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("cancel", expect.any(Function))
    expect(callback).toHaveBeenCalled()
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

  test("should connect onEscape", () => {
    const callback = jest.fn()

    widget.set("onEscape", callback)

    const handler = widget.handlers["escape"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("escape", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPrepare", () => {
    const callback = jest.fn()

    widget.set("onPrepare", callback)

    const handler = widget.handlers["prepare"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("prepare", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyPages", () => {
    const callback = jest.fn()

    widget.set("onNotifyPages", callback)

    const handler = widget.handlers["notify::pages"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::pages",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseHeaderBar", () => {
    const callback = jest.fn()

    widget.set("onNotifyUseHeaderBar", callback)

    const handler = widget.handlers["notify::use-header-bar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::use-header-bar",
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
