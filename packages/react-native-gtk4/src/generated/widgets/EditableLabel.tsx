import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class EditableLabel<
  T extends Gtk.EditableLabel,
> extends Widget<T> {
  createNode() {
    return new Gtk.EditableLabel({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "editing":
        this.node.editing = newValue
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
