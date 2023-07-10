import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class TextView<T extends Gtk.TextView> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.TextView() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "acceptsTab":
        this.node.setAcceptsTab(newValue)
        break
      case "bottomMargin":
        this.node.setBottomMargin(newValue)
        break
      case "buffer":
        this.node.setBuffer(newValue)
        break
      case "cursorVisible":
        this.node.setCursorVisible(newValue)
        break
      case "editable":
        this.node.setEditable(newValue)
        break
      case "extraMenu":
        this.node.setExtraMenu(newValue)
        break
      case "indent":
        this.node.setIndent(newValue)
        break
      case "inputHints":
        this.node.setInputHints(newValue)
        break
      case "inputPurpose":
        this.node.setInputPurpose(newValue)
        break
      case "justification":
        this.node.setJustification(newValue)
        break
      case "leftMargin":
        this.node.setLeftMargin(newValue)
        break
      case "monospace":
        this.node.setMonospace(newValue)
        break
      case "overwrite":
        this.node.setOverwrite(newValue)
        break
      case "pixelsAboveLines":
        this.node.setPixelsAboveLines(newValue)
        break
      case "pixelsBelowLines":
        this.node.setPixelsBelowLines(newValue)
        break
      case "pixelsInsideWrap":
        this.node.setPixelsInsideWrap(newValue)
        break
      case "rightMargin":
        this.node.setRightMargin(newValue)
        break
      case "tabs":
        this.node.setTabs(newValue)
        break
      case "topMargin":
        this.node.setTopMargin(newValue)
        break
      case "wrapMode":
        this.node.setWrapMode(newValue)
        break
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hscrollPolicy":
        this.node.setHscrollPolicy(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollPolicy":
        this.node.setVscrollPolicy(newValue)
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
      case "onExtendSelection":
        if (oldValue) {
          this.node.off("extend-selection", oldValue)
        }
        if (newValue) {
          this.node.on("extend-selection", newValue)
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
      case "onMoveViewport":
        if (oldValue) {
          this.node.off("move-viewport", oldValue)
        }
        if (newValue) {
          this.node.on("move-viewport", newValue)
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
      case "onSelectAll":
        if (oldValue) {
          this.node.off("select-all", oldValue)
        }
        if (newValue) {
          this.node.on("select-all", newValue)
        }
        break
      case "onSetAnchor":
        if (oldValue) {
          this.node.off("set-anchor", oldValue)
        }
        if (newValue) {
          this.node.on("set-anchor", newValue)
        }
        break
      case "onToggleCursorVisible":
        if (oldValue) {
          this.node.off("toggle-cursor-visible", oldValue)
        }
        if (newValue) {
          this.node.on("toggle-cursor-visible", newValue)
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
      default:
        break
    }
  }
}
