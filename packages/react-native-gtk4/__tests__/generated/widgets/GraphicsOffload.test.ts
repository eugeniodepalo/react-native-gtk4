import { GraphicsOffload } from "@/generated/widgets.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("GraphicsOffload", () => {
  let widget: GraphicsOffload

  beforeEach(() => {
    widget = new GraphicsOffload({}, GraphicsOffload.createNode())
  })

  test("should set enabled", () => {
    const newValue = Gtk.GraphicsOffloadEnabled.ENABLED
    widget.set("enabled", newValue)
    expect(widget.node.setEnabled).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
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

  test("should connect onNotifyEnabled", () => {
    const callback = jest.fn()

    widget.set("onNotifyEnabled", callback)

    const handler = widget.handlers["notify::enabled"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::enabled",
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

  test("should append child", () => {
    const child = new GraphicsOffload({}, GraphicsOffload.createNode())
    widget.appendChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(child.node)
  })

  test("should remove child", () => {
    const child = new GraphicsOffload({}, GraphicsOffload.createNode())
    widget.appendChild(child)
    widget.removeChild(child)
    expect(widget.node.setChild).toHaveBeenCalledWith(null)
  })
  test("should insert child before", () => {
    const child = new GraphicsOffload({}, GraphicsOffload.createNode())
    const sibling = new GraphicsOffload({}, GraphicsOffload.createNode())
    widget.appendChild(child)
    widget.insertBefore(sibling, child)
    expect(widget.node.setChild).toHaveBeenCalledWith(sibling.node)
  })
})
