import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SpinButton<
  T extends Gtk.SpinButton = Gtk.SpinButton,
> extends Widget<T> {
  createNode() {
    return new Gtk.SpinButton({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "adjustment":
        if (this.node.adjustment !== newValue) {
          this.node.setAdjustment(newValue)
        }
        break
      case "climbRate":
        if (this.node.climbRate !== newValue) {
          this.node.setClimbRate(newValue)
        }
        break
      case "digits":
        if (this.node.digits !== newValue) {
          this.node.setDigits(newValue)
        }
        break
      case "numeric":
        if (this.node.numeric !== newValue) {
          this.node.setNumeric(newValue)
        }
        break
      case "snapToTicks":
        if (this.node.snapToTicks !== newValue) {
          this.node.setSnapToTicks(newValue)
        }
        break
      case "updatePolicy":
        if (this.node.updatePolicy !== newValue) {
          this.node.setUpdatePolicy(newValue)
        }
        break
      case "value":
        if (this.node.value !== newValue) {
          this.node.setValue(newValue)
        }
        break
      case "wrap":
        if (this.node.wrap !== newValue) {
          this.node.setWrap(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editingCanceled":
        if (this.node.editingCanceled !== newValue) {
          this.node.editingCanceled = newValue
        }
        break
      case "editable":
        if (this.node.editable !== newValue) {
          this.node.setEditable(newValue)
        }
        break
      case "enableUndo":
        if (this.node.enableUndo !== newValue) {
          this.node.setEnableUndo(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.maxWidthChars !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "text":
        if (this.node.text !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "widthChars":
        if (this.node.widthChars !== newValue) {
          this.node.setWidthChars(newValue)
        }
        break
      case "xalign":
        if (this.node.xalign !== newValue) {
          this.node.xalign = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
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
    }
  }
}
