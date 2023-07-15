import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class PasswordEntry<
  T extends Gtk.PasswordEntry,
> extends Widget<T> {
  createNode() {
    return new Gtk.PasswordEntry({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatesDefault":
        this.node.activatesDefault = newValue
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "placeholderText":
        this.node.placeholderText = newValue
        break
      case "showPeekIcon":
        this.node.setShowPeekIcon(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
      case "text":
        this.node.setText(newValue)
        break
      case "widthChars":
        this.node.setWidthChars(newValue)
        break
      case "xalign":
        this.node.xalign = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onDeleteText":
        this.setHandler("delete-text", newValue)
        break
      case "onInsertText":
        this.setHandler("insert-text", newValue)
        break
    }
  }
}
