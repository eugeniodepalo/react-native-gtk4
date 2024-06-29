import { PopoverMenuBar } from "@/generated/widgets.js"
import Gio from "@/generated/girs/node-gio-2.0.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("PopoverMenuBar", () => {
  let widget: PopoverMenuBar

  beforeEach(() => {
    widget = new PopoverMenuBar({}, PopoverMenuBar.createNode())
  })

  test("should set menuModel", () => {
    const newValue = undefined
    widget.set("menuModel", newValue)
    expect(widget.node.setMenuModel).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyMenuModel", () => {
    const callback = jest.fn()

    widget.set("onNotifyMenuModel", callback)

    const handler = widget.handlers["notify::menu-model"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::menu-model",
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
