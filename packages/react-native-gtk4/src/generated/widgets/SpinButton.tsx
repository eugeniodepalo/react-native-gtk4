import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SpinButton<T extends Gtk.SpinButton> extends Widget<T> {
  createNode() {
    return new Gtk.SpinButton(
      this.props.adjustment,
      this.props.climbRate,
      this.props.digits
    ) as T
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
        if (oldValue) {
          this.node.off("change-value", oldValue)
        }
        if (newValue) {
          this.node.on("change-value", newValue)
        }
        break
      case "onInput":
        if (oldValue) {
          this.node.off("input", oldValue)
        }
        if (newValue) {
          this.node.on("input", newValue)
        }
        break
      case "onOutput":
        if (oldValue) {
          this.node.off("output", oldValue)
        }
        if (newValue) {
          this.node.on("output", newValue)
        }
        break
      case "onValueChanged":
        if (oldValue) {
          this.node.off("value-changed", oldValue)
        }
        if (newValue) {
          this.node.on("value-changed", newValue)
        }
        break
      case "onWrapped":
        if (oldValue) {
          this.node.off("wrapped", oldValue)
        }
        if (newValue) {
          this.node.on("wrapped", newValue)
        }
        break
      case "onEditingDone":
        if (oldValue) {
          this.node.off("editing-done", oldValue)
        }
        if (newValue) {
          this.node.on("editing-done", newValue)
        }
        break
      case "onRemoveWidget":
        if (oldValue) {
          this.node.off("remove-widget", oldValue)
        }
        if (newValue) {
          this.node.on("remove-widget", newValue)
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
    }
  }
}
