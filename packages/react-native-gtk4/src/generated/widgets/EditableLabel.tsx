import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class EditableLabel<
  T extends Gtk.EditableLabel = Gtk.EditableLabel,
> extends Widget<T> {
  static createNode() {
    return new Gtk.EditableLabel({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
      case "onNotifyEditing":
        this.setHandler("notify::editing", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyCursorPosition":
        this.setHandler("notify::cursor-position", newValue)
        break
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue)
        break
      case "onNotifyEnableUndo":
        this.setHandler("notify::enable-undo", newValue)
        break
      case "onNotifyMaxWidthChars":
        this.setHandler("notify::max-width-chars", newValue)
        break
      case "onNotifySelectionBound":
        this.setHandler("notify::selection-bound", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
        break
      case "onNotifyWidthChars":
        this.setHandler("notify::width-chars", newValue)
        break
      case "onNotifyXalign":
        this.setHandler("notify::xalign", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
