import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class Entry extends Widget {
  createNode(container: Container) {
    return new Gtk.Entry()
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
        this.node.setEnableEmojiCompletion(newValue)
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "imModule":
        this.node.setImModule(newValue)
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
        this.node.setInvisibleCharSet(newValue)
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
        this.node.setPrimaryIconActivatable(newValue)
        break
      case "primaryIconGicon":
        this.node.setPrimaryIconGicon(newValue)
        break
      case "primaryIconName":
        this.node.setPrimaryIconName(newValue)
        break
      case "primaryIconPaintable":
        this.node.setPrimaryIconPaintable(newValue)
        break
      case "primaryIconSensitive":
        this.node.setPrimaryIconSensitive(newValue)
        break
      case "primaryIconStorageType":
        this.node.setPrimaryIconStorageType(newValue)
        break
      case "primaryIconTooltipMarkup":
        this.node.setPrimaryIconTooltipMarkup(newValue)
        break
      case "primaryIconTooltipText":
        this.node.setPrimaryIconTooltipText(newValue)
        break
      case "progressFraction":
        this.node.setProgressFraction(newValue)
        break
      case "progressPulseStep":
        this.node.setProgressPulseStep(newValue)
        break
      case "scrollOffset":
        this.node.setScrollOffset(newValue)
        break
      case "secondaryIconActivatable":
        this.node.setSecondaryIconActivatable(newValue)
        break
      case "secondaryIconGicon":
        this.node.setSecondaryIconGicon(newValue)
        break
      case "secondaryIconName":
        this.node.setSecondaryIconName(newValue)
        break
      case "secondaryIconPaintable":
        this.node.setSecondaryIconPaintable(newValue)
        break
      case "secondaryIconSensitive":
        this.node.setSecondaryIconSensitive(newValue)
        break
      case "secondaryIconStorageType":
        this.node.setSecondaryIconStorageType(newValue)
        break
      case "secondaryIconTooltipMarkup":
        this.node.setSecondaryIconTooltipMarkup(newValue)
        break
      case "secondaryIconTooltipText":
        this.node.setSecondaryIconTooltipText(newValue)
        break
      case "showEmojiIcon":
        this.node.setShowEmojiIcon(newValue)
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "textLength":
        this.node.setTextLength(newValue)
        break
      case "truncateMultiline":
        this.node.setTruncateMultiline(newValue)
        break
      case "visibility":
        this.node.setVisibility(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "editingCanceled":
        this.node.setEditingCanceled(newValue)
        break
      case "cursorPosition":
        this.node.setCursorPosition(newValue)
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
      case "selectionBound":
        this.node.setSelectionBound(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "widthChars":
        this.node.setWidthChars(newValue)
        break
      case "xalign":
        this.node.setXalign(newValue)
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
      default:
        break
    }
  }
}
