import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class SpinButton<
  T extends Gtk.SpinButton = Gtk.SpinButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.SpinButton({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "adjustment":
        if (this.node.getAdjustment() !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "climbRate":
        if (this.node.getClimbRate() !== newValue) {
          this.node.setClimbRate(newValue)
        }
        break
      case "digits":
        if (this.node.getDigits() !== newValue) {
          this.node.setDigits(newValue)
        }
        break
      case "numeric":
        if (this.node.getNumeric() !== newValue) {
          this.node.setNumeric(newValue)
        }
        break
      case "snapToTicks":
        if (this.node.getSnapToTicks() !== newValue) {
          this.node.setSnapToTicks(newValue)
        }
        break
      case "updatePolicy":
        if (this.node.getUpdatePolicy() !== newValue) {
          this.node.setUpdatePolicy(newValue)
        }
        break
      case "value":
        if (this.node.getValue() !== newValue) {
          this.node.setValue(newValue)
        }
        break
      case "wrap":
        if (this.node.getWrap() !== newValue) {
          this.node.setWrap(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editingCanceled":
        if (this.node.editingCanceled !== newValue) {
          this.node.editingCanceled = newValue
        }
        break
      case "editable":
        if (this.node.getEditable() !== newValue) {
          this.node.setEditable(newValue)
        }
        break
      case "enableUndo":
        if (this.node.getEnableUndo() !== newValue) {
          this.node.setEnableUndo(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.getMaxWidthChars() !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "text":
        if (this.node.getText() !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "widthChars":
        if (this.node.getWidthChars() !== newValue) {
          this.node.setWidthChars(newValue)
        }
        break
      case "xalign":
        if (this.node.xalign !== newValue) {
          this.node.xalign = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
          this.node.setOrientation(newValue)
        }
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
      case "onNotifyAdjustment":
        this.setHandler("notify::adjustment", newValue)
        break
      case "onNotifyClimbRate":
        this.setHandler("notify::climb-rate", newValue)
        break
      case "onNotifyDigits":
        this.setHandler("notify::digits", newValue)
        break
      case "onNotifyNumeric":
        this.setHandler("notify::numeric", newValue)
        break
      case "onNotifySnapToTicks":
        this.setHandler("notify::snap-to-ticks", newValue)
        break
      case "onNotifyUpdatePolicy":
        this.setHandler("notify::update-policy", newValue)
        break
      case "onNotifyValue":
        this.setHandler("notify::value", newValue)
        break
      case "onNotifyWrap":
        this.setHandler("notify::wrap", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyEditingCanceled":
        this.setHandler("notify::editing-canceled", newValue)
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
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
      default:
        break
    }
  }
}
