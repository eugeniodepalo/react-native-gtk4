import Gtk from "@girs/node-gtk-4.0"
import Popover from "./Popover.js"

export default class EmojiChooser<
  T extends Gtk.EmojiChooser = Gtk.EmojiChooser,
> extends Popover<T> {
  static createNode() {
    return new Gtk.EmojiChooser({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onEmojiPicked":
        this.setHandler("emoji-picked", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
