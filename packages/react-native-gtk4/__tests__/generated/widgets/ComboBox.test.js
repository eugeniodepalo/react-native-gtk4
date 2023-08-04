import { ComboBox } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ComboBox", () => {
  let widget

  beforeEach(() => {
    widget = new ComboBox({}, ComboBox.createNode({}))
  })

  test("should set construct only props", () => {
    const props = {
      hasEntry: true,
    }

    new ComboBox(props, ComboBox.createNode(props))

    expect(Gtk.ComboBox).toHaveBeenCalledWith(props)
  })

  test("should set active", () => {
    const newValue = 1
    widget.set("active", newValue)
    expect(widget.node.setActive).toHaveBeenCalledWith(newValue)
  })

  test("should set activeId", () => {
    const newValue = "Some String"
    widget.set("activeId", newValue)
    expect(widget.node.setActiveId).toHaveBeenCalledWith(newValue)
  })

  test("should set buttonSensitivity", () => {
    const newValue = Gtk.SensitivityType.AUTO
    widget.set("buttonSensitivity", newValue)
    expect(widget.node.setButtonSensitivity).toHaveBeenCalledWith(newValue)
  })

  test("should set entryTextColumn", () => {
    const newValue = 1
    widget.set("entryTextColumn", newValue)
    expect(widget.node.setEntryTextColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set hasFrame", () => {
    const newValue = true
    widget.set("hasFrame", newValue)
    expect(widget.node.hasFrame).toBe(newValue)
  })

  test("should set idColumn", () => {
    const newValue = 1
    widget.set("idColumn", newValue)
    expect(widget.node.setIdColumn).toHaveBeenCalledWith(newValue)
  })

  test("should set model", () => {
    const newValue = new Gtk.TreeModel()
    widget.set("model", newValue)
    expect(widget.node.setModel).toHaveBeenCalledWith(newValue)
  })

  test("should set popupFixedWidth", () => {
    const newValue = true
    widget.set("popupFixedWidth", newValue)
    expect(widget.node.setPopupFixedWidth).toHaveBeenCalledWith(newValue)
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

  test("should connect onChanged", () => {
    const callback = jest.fn()

    widget.set("onChanged", callback)

    const handler = widget.handlers["changed"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("changed", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onFormatEntryText", () => {
    const callback = jest.fn()

    widget.set("onFormatEntryText", callback)

    const handler = widget.handlers["format-entry-text"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "format-entry-text",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onMoveActive", () => {
    const callback = jest.fn()

    widget.set("onMoveActive", callback)

    const handler = widget.handlers["move-active"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "move-active",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPopdown", () => {
    const callback = jest.fn()

    widget.set("onPopdown", callback)

    const handler = widget.handlers["popdown"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("popdown", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onPopup", () => {
    const callback = jest.fn()

    widget.set("onPopup", callback)

    const handler = widget.handlers["popup"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith("popup", expect.any(Function))
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

  test("should connect onNotifyActive", () => {
    const callback = jest.fn()

    widget.set("onNotifyActive", callback)

    const handler = widget.handlers["notify::active"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::active",
      expect.any(Function)
    )
  })

  test("should connect onNotifyActiveId", () => {
    const callback = jest.fn()

    widget.set("onNotifyActiveId", callback)

    const handler = widget.handlers["notify::active-id"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::active-id",
      expect.any(Function)
    )
  })

  test("should connect onNotifyButtonSensitivity", () => {
    const callback = jest.fn()

    widget.set("onNotifyButtonSensitivity", callback)

    const handler = widget.handlers["notify::button-sensitivity"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::button-sensitivity",
      expect.any(Function)
    )
  })

  test("should connect onNotifyChild", () => {
    const callback = jest.fn()

    widget.set("onNotifyChild", callback)

    const handler = widget.handlers["notify::child"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::child",
      expect.any(Function)
    )
  })

  test("should connect onNotifyEntryTextColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyEntryTextColumn", callback)

    const handler = widget.handlers["notify::entry-text-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::entry-text-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasEntry", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasEntry", callback)

    const handler = widget.handlers["notify::has-entry"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-entry",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasFrame", () => {
    const callback = jest.fn()

    widget.set("onNotifyHasFrame", callback)

    const handler = widget.handlers["notify::has-frame"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::has-frame",
      expect.any(Function)
    )
  })

  test("should connect onNotifyIdColumn", () => {
    const callback = jest.fn()

    widget.set("onNotifyIdColumn", callback)

    const handler = widget.handlers["notify::id-column"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::id-column",
      expect.any(Function)
    )
  })

  test("should connect onNotifyModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyModel", callback)

    const handler = widget.handlers["notify::model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::model",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPopupFixedWidth", () => {
    const callback = jest.fn()

    widget.set("onNotifyPopupFixedWidth", callback)

    const handler = widget.handlers["notify::popup-fixed-width"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::popup-fixed-width",
      expect.any(Function)
    )
  })

  test("should connect onNotifyPopupShown", () => {
    const callback = jest.fn()

    widget.set("onNotifyPopupShown", callback)

    const handler = widget.handlers["notify::popup-shown"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::popup-shown",
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

  test("should append child", () => {
    const child = new ComboBox()
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new ComboBox()
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new ComboBox()
    const sibling = new ComboBox()
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
