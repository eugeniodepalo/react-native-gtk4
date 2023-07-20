import Gtk from "@girs/node-gtk-4.0"
import Popover from "./Popover.js"

export default class EmojiChooser<
  T extends Gtk.EmojiChooser = Gtk.EmojiChooser,
> extends Popover<T> {
  createNode() {
    return new Gtk.EmojiChooser({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onEmojiPicked":
        this.setHandler("emoji-picked", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
