import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../abstract/widget.js"

export default class ComboBox<
  T extends Gtk.ComboBox = Gtk.ComboBox,
> extends Widget<T> {
  createNode() {
    return new Gtk.ComboBox({
      hasEntry: this.props.hasEntry,
    }) as T
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "active":
        if (this.node.getActive() !== newValue) {
          this.node.setActive(newValue)
        }
        break
      case "activeId":
        if (this.node.getActiveId() !== newValue) {
          this.node.setActiveId(newValue)
        }
        break
      case "buttonSensitivity":
        if (this.node.getButtonSensitivity() !== newValue) {
          this.node.setButtonSensitivity(newValue)
        }
        break
      case "entryTextColumn":
        if (this.node.getEntryTextColumn() !== newValue) {
          this.node.setEntryTextColumn(newValue)
        }
        break
      case "hasFrame":
        this.node.hasFrame = newValue
        break
      case "idColumn":
        if (this.node.getIdColumn() !== newValue) {
          this.node.setIdColumn(newValue)
        }
        break
      case "model":
        if (this.node.getModel() !== newValue) {
          this.node.setModel(newValue)
        }
        break
      case "popupFixedWidth":
        if (this.node.getPopupFixedWidth() !== newValue) {
          this.node.setPopupFixedWidth(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editingCanceled":
        this.node.editingCanceled = newValue
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onChanged":
        this.setHandler("changed", newValue)
        break
      case "onFormatEntryText":
        this.setHandler("format-entry-text", newValue)
        break
      case "onMoveActive":
        this.setHandler("move-active", newValue)
        break
      case "onPopdown":
        this.setHandler("popdown", newValue)
        break
      case "onPopup":
        this.setHandler("popup", newValue)
        break
      case "onEditingDone":
        this.setHandler("editing-done", newValue)
        break
      case "onRemoveWidget":
        this.setHandler("remove-widget", newValue)
        break
      case "onNotifyActive":
        this.setHandler("notify::active", newValue)
        break
      case "onNotifyActiveId":
        this.setHandler("notify::active-id", newValue)
        break
      case "onNotifyButtonSensitivity":
        this.setHandler("notify::button-sensitivity", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyEntryTextColumn":
        this.setHandler("notify::entry-text-column", newValue)
        break
      case "onNotifyHasEntry":
        this.setHandler("notify::has-entry", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyIdColumn":
        this.setHandler("notify::id-column", newValue)
        break
      case "onNotifyModel":
        this.setHandler("notify::model", newValue)
        break
      case "onNotifyPopupFixedWidth":
        this.setHandler("notify::popup-fixed-width", newValue)
        break
      case "onNotifyPopupShown":
        this.setHandler("notify::popup-shown", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyEditingCanceled":
        this.setHandler("notify::editing-canceled", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
