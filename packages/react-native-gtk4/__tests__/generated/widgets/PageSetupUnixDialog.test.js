import { PageSetupUnixDialog } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("PageSetupUnixDialog", () => {
  let widget

  beforeEach(() => {
    widget = new PageSetupUnixDialog({}, PageSetupUnixDialog.createNode({}))
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
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
