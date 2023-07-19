import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Entry<T extends Gtk.Entry = Gtk.Entry> extends Widget<T> {
  createNode() {
    return new Gtk.Entry({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatesDefault":
        if (this.node.activatesDefault !== newValue) {
          this.node.setActivatesDefault(newValue)
        }
        break
      case "attributes":
        if (this.node.attributes !== newValue) {
          this.node.setAttributes(newValue)
        }
        break
      case "buffer":
        if (this.node.buffer !== newValue) {
          this.node.setBuffer(newValue)
        }
        break
      case "completion":
        if (this.node.completion !== newValue) {
          this.node.setCompletion(newValue)
        }
        break
      case "enableEmojiCompletion":
        if (this.node.enableEmojiCompletion !== newValue) {
          this.node.enableEmojiCompletion = newValue
        }
        break
      case "extraMenu":
        if (this.node.extraMenu !== newValue) {
          this.node.setExtraMenu(newValue)
        }
        break
      case "hasFrame":
        if (this.node.hasFrame !== newValue) {
          this.node.setHasFrame(newValue)
        }
        break
      case "imModule":
        if (this.node.imModule !== newValue) {
          this.node.imModule = newValue
        }
        break
      case "inputHints":
        if (this.node.inputHints !== newValue) {
          this.node.setInputHints(newValue)
        }
        break
      case "inputPurpose":
        if (this.node.inputPurpose !== newValue) {
          this.node.setInputPurpose(newValue)
        }
        break
      case "invisibleChar":
        if (this.node.invisibleChar !== newValue) {
          this.node.setInvisibleChar(newValue)
        }
        break
      case "invisibleCharSet":
        if (this.node.invisibleCharSet !== newValue) {
          this.node.invisibleCharSet = newValue
        }
        break
      case "maxLength":
        if (this.node.maxLength !== newValue) {
          this.node.setMaxLength(newValue)
        }
        break
      case "overwriteMode":
        if (this.node.overwriteMode !== newValue) {
          this.node.setOverwriteMode(newValue)
        }
        break
      case "placeholderText":
        if (this.node.placeholderText !== newValue) {
          this.node.setPlaceholderText(newValue)
        }
        break
      case "primaryIconActivatable":
        if (this.node.primaryIconActivatable !== newValue) {
          this.node.primaryIconActivatable = newValue
        }
        break
      case "primaryIconGicon":
        if (this.node.primaryIconGicon !== newValue) {
          this.node.primaryIconGicon = newValue
        }
        break
      case "primaryIconName":
        if (this.node.primaryIconName !== newValue) {
          this.node.primaryIconName = newValue
        }
        break
      case "primaryIconPaintable":
        if (this.node.primaryIconPaintable !== newValue) {
          this.node.primaryIconPaintable = newValue
        }
        break
      case "primaryIconSensitive":
        if (this.node.primaryIconSensitive !== newValue) {
          this.node.primaryIconSensitive = newValue
        }
        break
      case "primaryIconTooltipMarkup":
        if (this.node.primaryIconTooltipMarkup !== newValue) {
          this.node.primaryIconTooltipMarkup = newValue
        }
        break
      case "primaryIconTooltipText":
        if (this.node.primaryIconTooltipText !== newValue) {
          this.node.primaryIconTooltipText = newValue
        }
        break
      case "progressFraction":
        if (this.node.progressFraction !== newValue) {
          this.node.setProgressFraction(newValue)
        }
        break
      case "progressPulseStep":
        if (this.node.progressPulseStep !== newValue) {
          this.node.setProgressPulseStep(newValue)
        }
        break
      case "secondaryIconActivatable":
        if (this.node.secondaryIconActivatable !== newValue) {
          this.node.secondaryIconActivatable = newValue
        }
        break
      case "secondaryIconGicon":
        if (this.node.secondaryIconGicon !== newValue) {
          this.node.secondaryIconGicon = newValue
        }
        break
      case "secondaryIconName":
        if (this.node.secondaryIconName !== newValue) {
          this.node.secondaryIconName = newValue
        }
        break
      case "secondaryIconPaintable":
        if (this.node.secondaryIconPaintable !== newValue) {
          this.node.secondaryIconPaintable = newValue
        }
        break
      case "secondaryIconSensitive":
        if (this.node.secondaryIconSensitive !== newValue) {
          this.node.secondaryIconSensitive = newValue
        }
        break
      case "secondaryIconTooltipMarkup":
        if (this.node.secondaryIconTooltipMarkup !== newValue) {
          this.node.secondaryIconTooltipMarkup = newValue
        }
        break
      case "secondaryIconTooltipText":
        if (this.node.secondaryIconTooltipText !== newValue) {
          this.node.secondaryIconTooltipText = newValue
        }
        break
      case "showEmojiIcon":
        if (this.node.showEmojiIcon !== newValue) {
          this.node.showEmojiIcon = newValue
        }
        break
      case "tabs":
        if (this.node.tabs !== newValue) {
          this.node.setTabs(newValue)
        }
        break
      case "truncateMultiline":
        if (this.node.truncateMultiline !== newValue) {
          this.node.truncateMultiline = newValue
        }
        break
      case "visibility":
        if (this.node.visibility !== newValue) {
          this.node.setVisibility(newValue)
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
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onIconPress":
        this.setHandler("icon-press", newValue)
        break
      case "onIconRelease":
        this.setHandler("icon-release", newValue)
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
      case "onNotifyActivatesDefault":
        this.setHandler("notify::activates-default", newValue)
        break
      case "onNotifyAttributes":
        this.setHandler("notify::attributes", newValue)
        break
      case "onNotifyBuffer":
        this.setHandler("notify::buffer", newValue)
        break
      case "onNotifyCompletion":
        this.setHandler("notify::completion", newValue)
        break
      case "onNotifyEnableEmojiCompletion":
        this.setHandler("notify::enable-emoji-completion", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyImModule":
        this.setHandler("notify::im-module", newValue)
        break
      case "onNotifyInputHints":
        this.setHandler("notify::input-hints", newValue)
        break
      case "onNotifyInputPurpose":
        this.setHandler("notify::input-purpose", newValue)
        break
      case "onNotifyInvisibleChar":
        this.setHandler("notify::invisible-char", newValue)
        break
      case "onNotifyInvisibleCharSet":
        this.setHandler("notify::invisible-char-set", newValue)
        break
      case "onNotifyMaxLength":
        this.setHandler("notify::max-length", newValue)
        break
      case "onNotifyOverwriteMode":
        this.setHandler("notify::overwrite-mode", newValue)
        break
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholder-text", newValue)
        break
      case "onNotifyPrimaryIconActivatable":
        this.setHandler("notify::primary-icon-activatable", newValue)
        break
      case "onNotifyPrimaryIconGicon":
        this.setHandler("notify::primary-icon-gicon", newValue)
        break
      case "onNotifyPrimaryIconName":
        this.setHandler("notify::primary-icon-name", newValue)
        break
      case "onNotifyPrimaryIconPaintable":
        this.setHandler("notify::primary-icon-paintable", newValue)
        break
      case "onNotifyPrimaryIconSensitive":
        this.setHandler("notify::primary-icon-sensitive", newValue)
        break
      case "onNotifyPrimaryIconStorageType":
        this.setHandler("notify::primary-icon-storage-type", newValue)
        break
      case "onNotifyPrimaryIconTooltipMarkup":
        this.setHandler("notify::primary-icon-tooltip-markup", newValue)
        break
      case "onNotifyPrimaryIconTooltipText":
        this.setHandler("notify::primary-icon-tooltip-text", newValue)
        break
      case "onNotifyProgressFraction":
        this.setHandler("notify::progress-fraction", newValue)
        break
      case "onNotifyProgressPulseStep":
        this.setHandler("notify::progress-pulse-step", newValue)
        break
      case "onNotifyScrollOffset":
        this.setHandler("notify::scroll-offset", newValue)
        break
      case "onNotifySecondaryIconActivatable":
        this.setHandler("notify::secondary-icon-activatable", newValue)
        break
      case "onNotifySecondaryIconGicon":
        this.setHandler("notify::secondary-icon-gicon", newValue)
        break
      case "onNotifySecondaryIconName":
        this.setHandler("notify::secondary-icon-name", newValue)
        break
      case "onNotifySecondaryIconPaintable":
        this.setHandler("notify::secondary-icon-paintable", newValue)
        break
      case "onNotifySecondaryIconSensitive":
        this.setHandler("notify::secondary-icon-sensitive", newValue)
        break
      case "onNotifySecondaryIconStorageType":
        this.setHandler("notify::secondary-icon-storage-type", newValue)
        break
      case "onNotifySecondaryIconTooltipMarkup":
        this.setHandler("notify::secondary-icon-tooltip-markup", newValue)
        break
      case "onNotifySecondaryIconTooltipText":
        this.setHandler("notify::secondary-icon-tooltip-text", newValue)
        break
      case "onNotifyShowEmojiIcon":
        this.setHandler("notify::show-emoji-icon", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
        break
      case "onNotifyTextLength":
        this.setHandler("notify::text-length", newValue)
        break
      case "onNotifyTruncateMultiline":
        this.setHandler("notify::truncate-multiline", newValue)
        break
      case "onNotifyVisibility":
        this.setHandler("notify::visibility", newValue)
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
    }
  }
}
