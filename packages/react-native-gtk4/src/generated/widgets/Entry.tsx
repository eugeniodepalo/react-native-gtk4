import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Entry<T extends Gtk.Entry> extends Widget<T> {
  createNode() {
    return new Gtk.Entry({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatesDefault":
        this.node.setActivatesDefault(newValue)
        break
      case "attributes":
        this.node.setAttributes(newValue)
        break
      case "buffer":
        this.node.setBuffer(newValue)
        break
      case "completion":
        this.node.setCompletion(newValue)
        break
      case "enableEmojiCompletion":
        this.node.enableEmojiCompletion = newValue
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "imModule":
        this.node.imModule = newValue
        break
      case "inputHints":
        this.node.setInputHints(newValue)
        break
      case "inputPurpose":
        this.node.setInputPurpose(newValue)
        break
      case "invisibleChar":
        this.node.setInvisibleChar(newValue)
        break
      case "invisibleCharSet":
        this.node.invisibleCharSet = newValue
        break
      case "maxLength":
        this.node.setMaxLength(newValue)
        break
      case "overwriteMode":
        this.node.setOverwriteMode(newValue)
        break
      case "placeholderText":
        this.node.setPlaceholderText(newValue)
        break
      case "primaryIconActivatable":
        this.node.primaryIconActivatable = newValue
        break
      case "primaryIconGicon":
        this.node.primaryIconGicon = newValue
        break
      case "primaryIconName":
        this.node.primaryIconName = newValue
        break
      case "primaryIconPaintable":
        this.node.primaryIconPaintable = newValue
        break
      case "primaryIconSensitive":
        this.node.primaryIconSensitive = newValue
        break
      case "primaryIconTooltipMarkup":
        this.node.primaryIconTooltipMarkup = newValue
        break
      case "primaryIconTooltipText":
        this.node.primaryIconTooltipText = newValue
        break
      case "progressFraction":
        this.node.setProgressFraction(newValue)
        break
      case "progressPulseStep":
        this.node.setProgressPulseStep(newValue)
        break
      case "secondaryIconActivatable":
        this.node.secondaryIconActivatable = newValue
        break
      case "secondaryIconGicon":
        this.node.secondaryIconGicon = newValue
        break
      case "secondaryIconName":
        this.node.secondaryIconName = newValue
        break
      case "secondaryIconPaintable":
        this.node.secondaryIconPaintable = newValue
        break
      case "secondaryIconSensitive":
        this.node.secondaryIconSensitive = newValue
        break
      case "secondaryIconTooltipMarkup":
        this.node.secondaryIconTooltipMarkup = newValue
        break
      case "secondaryIconTooltipText":
        this.node.secondaryIconTooltipText = newValue
        break
      case "showEmojiIcon":
        this.node.showEmojiIcon = newValue
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "truncateMultiline":
        this.node.truncateMultiline = newValue
        break
      case "visibility":
        this.node.setVisibility(newValue)
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
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onIconPress":
        if (oldValue) {
          this.node.off("icon-press", oldValue)
        }
        if (newValue) {
          this.node.on("icon-press", newValue)
        }
        break
      case "onIconRelease":
        if (oldValue) {
          this.node.off("icon-release", oldValue)
        }
        if (newValue) {
          this.node.on("icon-release", newValue)
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
