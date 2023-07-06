import { Container, Gtk } from ".."
import Widget from "../widget"

export default class PasswordEntry extends Widget {
  createNode(container: Container) {
    return new Gtk.PasswordEntry()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatesDefault":
        this.node.setActivatesDefault(newValue)
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "placeholderText":
        this.node.setPlaceholderText(newValue)
        break
      case "showPeekIcon":
        this.node.setShowPeekIcon(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "cursorPosition":
        this.node.setCursorPosition(newValue)
        break
      case "editable":
        this.node.setEditable(newValue)
        break
      case "enableUndo":
        this.node.setEnableUndo(newValue)
        break
      case "maxWidthChars":
        this.node.setMaxWidthChars(newValue)
        break
      case "selectionBound":
        this.node.setSelectionBound(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "widthChars":
        this.node.setWidthChars(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
        break
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onChanged":
        if (oldValue) {
          this.node.off("changed", oldValue)
        }
        if (newValue) {
          this.node.on("changed", newValue)
        }
        break
      case "onDeleteText":
        if (oldValue) {
          this.node.off("delete-text", oldValue)
        }
        if (newValue) {
          this.node.on("delete-text", newValue)
        }
        break
      case "onInsertText":
        if (oldValue) {
          this.node.off("insert-text", oldValue)
        }
        if (newValue) {
          this.node.on("insert-text", newValue)
        }
        break
      default:
        break
    }
  }
}
