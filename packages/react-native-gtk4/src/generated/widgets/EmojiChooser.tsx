import { Gtk } from "../../index.js"
import Popover from "./Popover.js"

export default class EmojiChooser<
  T extends Gtk.EmojiChooser,
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
        if (oldValue) {
          this.node.off("emoji-picked", oldValue)
        }
        if (newValue) {
          this.node.on("emoji-picked", newValue)
        }
        break
    }
  }
}
