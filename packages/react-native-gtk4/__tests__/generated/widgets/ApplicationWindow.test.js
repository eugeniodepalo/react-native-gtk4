import { ApplicationWindow } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("ApplicationWindow", () => {
  let widget

  beforeEach(() => {
    widget = new ApplicationWindow({}, ApplicationWindow.createNode({}))
  })

  test("should set showMenubar", () => {
    const newValue = true
    widget.set("showMenubar", newValue)
    expect(widget.node.setShowMenubar).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyShowMenubar", () => {
    const callback = jest.fn()

    widget.set("onNotifyShowMenubar", callback)

    const handler = widget.handlers["notify::show-menubar"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::show-menubar",
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
