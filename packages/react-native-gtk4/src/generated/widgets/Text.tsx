import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Text<T extends Gtk.Text> extends Widget<T> {
  createNode() {
    return new Gtk.Text() as T
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
      case "enableEmojiCompletion":
        this.node.setEnableEmojiCompletion(newValue)
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
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
      case "maxLength":
        this.node.setMaxLength(newValue)
        break
      case "overwriteMode":
        this.node.setOverwriteMode(newValue)
        break
      case "placeholderText":
        this.node.setPlaceholderText(newValue)
        break
      case "propagateTextWidth":
        this.node.setPropagateTextWidth(newValue)
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "truncateMultiline":
        this.node.setTruncateMultiline(newValue)
        break
      case "visibility":
        this.node.setVisibility(newValue)
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
      case "onActivate":
        if (oldValue) {
          this.node.off("activate", oldValue)
        }
        if (newValue) {
          this.node.on("activate", newValue)
        }
        break
      case "onBackspace":
        if (oldValue) {
          this.node.off("backspace", oldValue)
        }
        if (newValue) {
          this.node.on("backspace", newValue)
        }
        break
      case "onCopyClipboard":
        if (oldValue) {
          this.node.off("copy-clipboard", oldValue)
        }
        if (newValue) {
          this.node.on("copy-clipboard", newValue)
        }
        break
      case "onCutClipboard":
        if (oldValue) {
          this.node.off("cut-clipboard", oldValue)
        }
        if (newValue) {
          this.node.on("cut-clipboard", newValue)
        }
        break
      case "onDeleteFromCursor":
        if (oldValue) {
          this.node.off("delete-from-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("delete-from-cursor", newValue)
        }
        break
      case "onInsertAtCursor":
        if (oldValue) {
          this.node.off("insert-at-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("insert-at-cursor", newValue)
        }
        break
      case "onInsertEmoji":
        if (oldValue) {
          this.node.off("insert-emoji", oldValue)
        }
        if (newValue) {
          this.node.on("insert-emoji", newValue)
        }
        break
      case "onMoveCursor":
        if (oldValue) {
          this.node.off("move-cursor", oldValue)
        }
        if (newValue) {
          this.node.on("move-cursor", newValue)
        }
        break
      case "onPasteClipboard":
        if (oldValue) {
          this.node.off("paste-clipboard", oldValue)
        }
        if (newValue) {
          this.node.on("paste-clipboard", newValue)
        }
        break
      case "onPreeditChanged":
        if (oldValue) {
          this.node.off("preedit-changed", oldValue)
        }
        if (newValue) {
          this.node.on("preedit-changed", newValue)
        }
        break
      case "onToggleOverwrite":
        if (oldValue) {
          this.node.off("toggle-overwrite", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-overwrite", newValue)
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
