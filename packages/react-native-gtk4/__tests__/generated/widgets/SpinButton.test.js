import { SpinButton } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("SpinButton", () => {
  let widget

  beforeEach(() => {
    widget = new SpinButton({}, SpinButton.createNode({}))
  })

  test("should set adjustment", () => {
    const newValue = new Gtk.Adjustment()
    widget.set("adjustment", newValue)
    expect(widget.node.setAdjustment).toHaveBeenCalledWith(newValue)
  })

  test("should set climbRate", () => {
    const newValue = 1
    widget.set("climbRate", newValue)
    expect(widget.node.setClimbRate).toHaveBeenCalledWith(newValue)
  })

  test("should set digits", () => {
    const newValue = 1
    widget.set("digits", newValue)
    expect(widget.node.setDigits).toHaveBeenCalledWith(newValue)
  })

  test("should set numeric", () => {
    const newValue = true
    widget.set("numeric", newValue)
    expect(widget.node.setNumeric).toHaveBeenCalledWith(newValue)
  })

  test("should set snapToTicks", () => {
    const newValue = true
    widget.set("snapToTicks", newValue)
    expect(widget.node.setSnapToTicks).toHaveBeenCalledWith(newValue)
  })

  test("should set updatePolicy", () => {
    const newValue = Gtk.SpinButtonUpdatePolicy.ALWAYS
    widget.set("updatePolicy", newValue)
    expect(widget.node.setUpdatePolicy).toHaveBeenCalledWith(newValue)
  })

  test("should set value", () => {
    const newValue = 1
    widget.set("value", newValue)
    expect(widget.node.setValue).toHaveBeenCalledWith(newValue)
  })

  test("should set wrap", () => {
    const newValue = true
    widget.set("wrap", newValue)
    expect(widget.node.setWrap).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should set editingCanceled", () => {
    const newValue = true
    widget.set("editingCanceled", newValue)
    expect(widget.node.editingCanceled).toBe(newValue)
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

  test("should set orientation", () => {
    const newValue = Gtk.Orientation.HORIZONTAL
    widget.set("orientation", newValue)
    expect(widget.node.setOrientation).toHaveBeenCalledWith(newValue)
  })

  test("should connect onChangeValue", () => {
    const callback = jest.fn()

    widget.set("onChangeValue", callback)

    const handler = widget.handlers["change-value"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "change-value",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onInput", () => {
    const callback = jest.fn()

    widget.set("onInput", callback)

    const handler = widget.handlers["input"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("input", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onOutput", () => {
    const callback = jest.fn()

    widget.set("onOutput", callback)

    const handler = widget.handlers["output"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("output", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onValueChanged", () => {
    const callback = jest.fn()

    widget.set("onValueChanged", callback)

    const handler = widget.handlers["value-changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "value-changed",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onWrapped", () => {
    const callback = jest.fn()

    widget.set("onWrapped", callback)

    const handler = widget.handlers["wrapped"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("wrapped", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onEditingDone", () => {
    const callback = jest.fn()

    widget.set("onEditingDone", callback)

    const handler = widget.handlers["editing-done"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "editing-done",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRemoveWidget", () => {
    const callback = jest.fn()

    widget.set("onRemoveWidget", callback)

    const handler = widget.handlers["remove-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "remove-widget",
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

  test("should connect onNotifyAdjustment", () => {
    const callback = jest.fn()

    widget.set("onNotifyAdjustment", callback)

    const handler = widget.handlers["notify::adjustment"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::adjustment",
      expect.any(Function)
    )
  })

  test("should connect onNotifyClimbRate", () => {
    const callback = jest.fn()

    widget.set("onNotifyClimbRate", callback)

    const handler = widget.handlers["notify::climb-rate"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::climb-rate",
      expect.any(Function)
    )
  })

  test("should connect onNotifyDigits", () => {
    const callback = jest.fn()

    widget.set("onNotifyDigits", callback)

    const handler = widget.handlers["notify::digits"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::digits",
      expect.any(Function)
    )
  })

  test("should connect onNotifyNumeric", () => {
    const callback = jest.fn()

    widget.set("onNotifyNumeric", callback)

    const handler = widget.handlers["notify::numeric"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::numeric",
      expect.any(Function)
    )
  })

  test("should connect onNotifySnapToTicks", () => {
    const callback = jest.fn()

    widget.set("onNotifySnapToTicks", callback)

    const handler = widget.handlers["notify::snap-to-ticks"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::snap-to-ticks",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUpdatePolicy", () => {
    const callback = jest.fn()

    widget.set("onNotifyUpdatePolicy", callback)

    const handler = widget.handlers["notify::update-policy"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::update-policy",
      expect.any(Function)
    )
  })

  test("should connect onNotifyValue", () => {
    const callback = jest.fn()

    widget.set("onNotifyValue", callback)

    const handler = widget.handlers["notify::value"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::value",
      expect.any(Function)
    )
  })

  test("should connect onNotifyWrap", () => {
    const callback = jest.fn()

    widget.set("onNotifyWrap", callback)

    const handler = widget.handlers["notify::wrap"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::wrap",
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

  test("should connect onNotifyEditingCanceled", () => {
    const callback = jest.fn()

    widget.set("onNotifyEditingCanceled", callback)

    const handler = widget.handlers["notify::editing-canceled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::editing-canceled",
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
