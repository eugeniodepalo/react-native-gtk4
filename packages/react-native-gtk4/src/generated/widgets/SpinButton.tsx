import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class SpinButton<
  T extends Gtk.SpinButton = Gtk.SpinButton,
> extends Widget<T> {
  static createNode() {
    return new Gtk.SpinButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
