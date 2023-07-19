import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Text<T extends Gtk.Text = Gtk.Text> extends Widget<T> {
  createNode() {
    return new Gtk.Text({}) as T
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
      case "enableEmojiCompletion":
        if (this.node.enableEmojiCompletion !== newValue) {
          this.node.setEnableEmojiCompletion(newValue)
        }
        break
      case "extraMenu":
        if (this.node.extraMenu !== newValue) {
          this.node.setExtraMenu(newValue)
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
      case "propagateTextWidth":
        if (this.node.propagateTextWidth !== newValue) {
          this.node.setPropagateTextWidth(newValue)
        }
        break
      case "tabs":
        if (this.node.tabs !== newValue) {
          this.node.setTabs(newValue)
        }
        break
      case "truncateMultiline":
        if (this.node.truncateMultiline !== newValue) {
          this.node.setTruncateMultiline(newValue)
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
      case "onBackspace":
        this.setHandler("backspace", newValue)
        break
      case "onCopyClipboard":
        this.setHandler("copy-clipboard", newValue)
        break
      case "onCutClipboard":
        this.setHandler("cut-clipboard", newValue)
        break
      case "onDeleteFromCursor":
        this.setHandler("delete-from-cursor", newValue)
        break
      case "onInsertAtCursor":
        this.setHandler("insert-at-cursor", newValue)
        break
      case "onInsertEmoji":
        this.setHandler("insert-emoji", newValue)
        break
      case "onMoveCursor":
        this.setHandler("move-cursor", newValue)
        break
      case "onPasteClipboard":
        this.setHandler("paste-clipboard", newValue)
        break
      case "onPreeditChanged":
        this.setHandler("preedit-changed", newValue)
        break
      case "onToggleOverwrite":
        this.setHandler("toggle-overwrite", newValue)
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
      case "onNotifyEnableEmojiCompletion":
        this.setHandler("notify::enable-emoji-completion", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
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
      case "onNotifyPropagateTextWidth":
        this.setHandler("notify::propagate-text-width", newValue)
        break
      case "onNotifyScrollOffset":
        this.setHandler("notify::scroll-offset", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
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
