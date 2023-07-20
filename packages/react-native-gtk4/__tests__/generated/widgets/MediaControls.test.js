import { MediaControls } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("MediaControls", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.MediaControls.mockImplementation(() => node)
    node = new Gtk.MediaControls()
    widget = new MediaControls({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
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
