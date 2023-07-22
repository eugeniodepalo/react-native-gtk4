import { Video } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Video", () => {
  let widget

  beforeEach(() => {
    widget = new Video({})
  })

  test("should set autoplay", () => {
    const newValue = true
    widget.set("autoplay", newValue)
    expect(widget.node.setAutoplay).toHaveBeenCalledWith(newValue)
  })

  test("should set file", () => {
    const newValue = new Gio.File()
    widget.set("file", newValue)
    expect(widget.node.setFile).toHaveBeenCalledWith(newValue)
  })

  test("should set loop", () => {
    const newValue = true
    widget.set("loop", newValue)
    expect(widget.node.setLoop).toHaveBeenCalledWith(newValue)
  })

  test("should set mediaStream", () => {
    const newValue = new Gtk.MediaStream()
    widget.set("mediaStream", newValue)
    expect(widget.node.setMediaStream).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onNotifyAutoplay", () => {
    const callback = jest.fn()

    widget.set("onNotifyAutoplay", callback)

    const handler = widget.handlers["notify::autoplay"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::autoplay",
      expect.any(Function)
    )
  })

  test("should connect onNotifyFile", () => {
    const callback = jest.fn()

    widget.set("onNotifyFile", callback)

    const handler = widget.handlers["notify::file"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::file",
      expect.any(Function)
    )
  })

  test("should connect onNotifyLoop", () => {
    const callback = jest.fn()

    widget.set("onNotifyLoop", callback)

    const handler = widget.handlers["notify::loop"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::loop",
      expect.any(Function)
    )
  })

  test("should connect onNotifyMediaStream", () => {
    const callback = jest.fn()

    widget.set("onNotifyMediaStream", callback)

    const handler = widget.handlers["notify::media-stream"]
    expect(handler).toBeDefined()
    handler()
    expect(callback).toHaveBeenCalled()
    expect(widget.node.on).toHaveBeenCalledWith(
      "notify::media-stream",
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
