import { EmojiChooser } from "@/generated/widgets.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"

describe("EmojiChooser", () => {
  let widget: EmojiChooser

  beforeEach(() => {
    widget = new EmojiChooser({}, EmojiChooser.createNode())
  })

  test("should set accessibleRole", () => {
    const newValue = Gtk.AccessibleRole.ALERT
    widget.set("accessibleRole", newValue)
    expect(widget.node.accessibleRole).toBe(newValue)
  })

  test("should connect onEmojiPicked", () => {
    const callback = jest.fn()

    widget.set("onEmojiPicked", callback)

    const handler = widget.handlers["emoji-picked"]
    expect(handler).toBeDefined()
    handler()
    expect(widget.node.on).toHaveBeenCalledWith(
      "emoji-picked",
      expect.any(Function)
    )
    expect(callback).toHaveBeenCalled()
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
