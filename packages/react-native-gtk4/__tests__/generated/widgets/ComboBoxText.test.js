import { ComboBoxText } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ComboBoxText", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.ComboBoxText()
    Gtk.ComboBoxText.mockImplementation(() => node)
    widget = new ComboBoxText({})
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should set editingCanceled", () => {
    const newValue = true
    widget.set("editingCanceled", newValue)
    expect(node.editingCanceled).toBe(newValue)
  })

  test("should connect onEditingDone", () => {
    const callback = jest.fn()
    widget.set("onEditingDone", callback)
    const handler = widget.handlers["editing-done"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("editing-done", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRemoveWidget", () => {
    const callback = jest.fn()
    widget.set("onRemoveWidget", callback)
    const handler = widget.handlers["remove-widget"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("remove-widget", expect.any(Function))
    expect(callback).toHaveBeenCalled()
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

  test("should connect onNotifyEditingCanceled", () => {
    const callback = jest.fn()
    widget.set("onNotifyEditingCanceled", callback)
    const handler = widget.handlers["notify::editing-canceled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::editing-canceled",
      expect.any(Function)
    )
  })
})
