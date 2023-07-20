import { Video } from "../../../src/generated/widgets.js"
import Gio from "@girs/node-gio-2.0"
import Gtk from "@girs/node-gtk-4.0"

describe("Video", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.Video.mockImplementation(() => node)
    node = new Gtk.Video()
    widget = new Video({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set autoplay", () => {
    const newValue = true
    widget.set("autoplay", newValue)
    expect(node.setAutoplay).toHaveBeenCalledWith(newValue)
  })

  test("should set file", () => {
    const newValue = new Gio.File()
    widget.set("file", newValue)
    expect(node.setFile).toHaveBeenCalledWith(newValue)
  })

  test("should set loop", () => {
    const newValue = true
    widget.set("loop", newValue)
    expect(node.setLoop).toHaveBeenCalledWith(newValue)
  })

  test("should set mediaStream", () => {
    const newValue = new Gtk.MediaStream()
    widget.set("mediaStream", newValue)
    expect(node.setMediaStream).toHaveBeenCalledWith(newValue)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
