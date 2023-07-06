import { Container, Gtk } from ".."
import Popover from "./Popover"

export default class EmojiChooser extends Popover {
  createNode(container: Container) {
    return new Gtk.EmojiChooser()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onEmojiPicked":
        if (oldValue) {
          this.node.off("emoji-picked", oldValue)
        }
        if (newValue) {
          this.node.on("emoji-picked", newValue)
        }
        break
      default:
        break
    }
  }
}
