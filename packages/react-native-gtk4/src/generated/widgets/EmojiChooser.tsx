import { Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class EmojiChooser<
  T extends Gtk.EmojiChooser = Gtk.EmojiChooser,
> extends Popover<T> {
  createNode() {
    return new Gtk.EmojiChooser({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
    }
  }
}
