import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SpinButton<T extends Gtk.SpinButton> extends Widget<T> {
  createNode() {
    return new Gtk.SpinButton({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        this.node.setAdjustment(newValue)
        break
      case "climbRate":
        this.node.setClimbRate(newValue)
        break
      case "digits":
        this.node.setDigits(newValue)
        break
      case "numeric":
        this.node.setNumeric(newValue)
        break
      case "snapToTicks":
        this.node.setSnapToTicks(newValue)
        break
      case "updatePolicy":
        this.node.setUpdatePolicy(newValue)
        break
      case "value":
        this.node.setValue(newValue)
        break
      case "wrap":
        this.node.setWrap(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "editingCanceled":
        this.node.editingCanceled = newValue
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onChangeValue":
        this.setHandler("change-value", newValue)
        break
      case "onInput":
        this.setHandler("input", newValue)
        break
      case "onOutput":
        this.setHandler("output", newValue)
        break
      case "onValueChanged":
        this.setHandler("value-changed", newValue)
        break
      case "onWrapped":
        this.setHandler("wrapped", newValue)
        break
      case "onEditingDone":
        this.setHandler("editing-done", newValue)
        break
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue)
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
