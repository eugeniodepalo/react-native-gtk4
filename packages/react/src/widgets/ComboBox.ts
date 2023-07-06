import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class ComboBox extends Widget {
  createNode(container: Container) {
    return new Gtk.ComboBox()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "active":
        this.node.setActive(newValue)
        break
      case "activeId":
        this.node.setActiveId(newValue)
        break
      case "buttonSensitivity":
        this.node.setButtonSensitivity(newValue)
        break
      case "entryTextColumn":
        this.node.setEntryTextColumn(newValue)
        break
      case "hasEntry":
        this.node.setHasEntry(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "idColumn":
        this.node.setIdColumn(newValue)
        break
      case "model":
        this.node.setModel(newValue)
        break
      case "popupFixedWidth":
        this.node.setPopupFixedWidth(newValue)
        break
      case "popupShown":
        this.node.setPopupShown(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "editingCanceled":
        this.node.setEditingCanceled(newValue)
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
      case "onFormatEntryText":
        if (oldValue) {
          this.node.off("format-entry-text", oldValue)
        }
        if (newValue) {
          this.node.on("format-entry-text", newValue)
        }
        break
      case "onMoveActive":
        if (oldValue) {
          this.node.off("move-active", oldValue)
        }
        if (newValue) {
          this.node.on("move-active", newValue)
        }
        break
      case "onPopdown":
        if (oldValue) {
          this.node.off("popdown", oldValue)
        }
        if (newValue) {
          this.node.on("popdown", newValue)
        }
        break
      case "onPopup":
        if (oldValue) {
          this.node.off("popup", oldValue)
        }
        if (newValue) {
          this.node.on("popup", newValue)
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
      default:
        break
    }
  }
}
