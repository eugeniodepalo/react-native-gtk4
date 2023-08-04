import { AppChooserDialog } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("AppChooserDialog", () => {
  let widget

  beforeEach(() => {
    widget = new AppChooserDialog({}, AppChooserDialog.createNode({}))
  })

  test("should set construct only props", () => {
    const props = {
      gfile: new Gio.File(),
      contentType: "Some String",
    }

    new AppChooserDialog(props, AppChooserDialog.createNode(props))

    expect(Gtk.AppChooserDialog).toHaveBeenCalledWith(props)
  })

  test("should set heading", () => {
    const newValue = "Some String"
    widget.set("heading", newValue)
    expect(widget.node.setHeading).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyGfile", () => {
    const callback = jest.fn()

    widget.set("onNotifyGfile", callback)

    const handler = widget.handlers["notify::gfile"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::gfile",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHeading", () => {
    const callback = jest.fn()

    widget.set("onNotifyHeading", callback)

    const handler = widget.handlers["notify::heading"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::heading",
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

  test("should connect onNotifyContentType", () => {
    const callback = jest.fn()

    widget.set("onNotifyContentType", callback)

    const handler = widget.handlers["notify::content-type"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::content-type",
      expect.any(Function)
    )
  })
})
