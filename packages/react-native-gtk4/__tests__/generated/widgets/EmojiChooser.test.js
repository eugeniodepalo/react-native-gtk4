import { EmojiChooser } from "../../../src/generated/widgets.js"
import Gtk from "@girs/node-gtk-4.0"

describe("EmojiChooser", () => {
  let widget
  let node

  beforeEach(() => {
    Gtk.EmojiChooser.mockImplementation(() => node)
    node = new Gtk.EmojiChooser()
    widget = new EmojiChooser({})
  })

  test("should create node", () => {
    expect(widget.node).toBe(node)
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(node.accessibleRole).toBe(newValue)
  })
})
