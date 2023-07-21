import { GLArea } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("GLArea", () => {
  let widget
  let node

  beforeEach(() => {
    node = new Gtk.GLArea()
    Gtk.GLArea.mockImplementation(() => node)
    widget = new GLArea({})
  })

  test("should set autoRender", () => {
    const newValue = true
    widget.set("autoRender", newValue)
    expect(node.setAutoRender).toHaveBeenCalledWith(newValue)
  })

  test("should set hasDepthBuffer", () => {
    const newValue = true
    widget.set("hasDepthBuffer", newValue)
    expect(node.setHasDepthBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set hasStencilBuffer", () => {
    const newValue = true
    widget.set("hasStencilBuffer", newValue)
    expect(node.setHasStencilBuffer).toHaveBeenCalledWith(newValue)
  })

  test("should set useEs", () => {
    const newValue = true
    widget.set("useEs", newValue)
    expect(node.setUseEs).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })

  test("should connect onCreateContext", () => {
    const callback = jest.fn()
    widget.set("onCreateContext", callback)
    const handler = widget.handlers["create-context"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("create-context", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onRender", () => {
    const callback = jest.fn()
    widget.set("onRender", callback)
    const handler = widget.handlers["render"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("render", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onResize", () => {
    const callback = jest.fn()
    widget.set("onResize", callback)
    const handler = widget.handlers["resize"]
    expect(handler).toBeDefined()
    handler()
    expect(node.on).toHaveBeenCalledWith("resize", expect.any(Function))
    expect(callback).toHaveBeenCalled()
  })

  test("should connect onNotifyAutoRender", () => {
    const callback = jest.fn()
    widget.set("onNotifyAutoRender", callback)
    const handler = widget.handlers["notify::auto-render"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::auto-render",
      expect.any(Function)
    )
  })

  test("should connect onNotifyContext", () => {
    const callback = jest.fn()
    widget.set("onNotifyContext", callback)
    const handler = widget.handlers["notify::context"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::context",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasDepthBuffer", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasDepthBuffer", callback)
    const handler = widget.handlers["notify::has-depth-buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-depth-buffer",
      expect.any(Function)
    )
  })

  test("should connect onNotifyHasStencilBuffer", () => {
    const callback = jest.fn()
    widget.set("onNotifyHasStencilBuffer", callback)
    const handler = widget.handlers["notify::has-stencil-buffer"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith(
      "notify::has-stencil-buffer",
      expect.any(Function)
    )
  })

  test("should connect onNotifyUseEs", () => {
    const callback = jest.fn()
    widget.set("onNotifyUseEs", callback)
    const handler = widget.handlers["notify::use-es"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(node.on).toHaveBeenCalledWith("notify::use-es", expect.any(Function))
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
})
