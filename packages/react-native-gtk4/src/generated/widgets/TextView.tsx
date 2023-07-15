import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class TextView<T extends Gtk.TextView> extends Widget<T> {
  createNode() {
    return new Gtk.TextView({}) as T
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
      case "imModule":
        this.node.imModule = newValue
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
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
      case "onExtendSelection":
        this.setHandler("extend-selection", newValue)
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
      case "onMoveViewport":
        this.setHandler("move-viewport", newValue)
        break
      case "onPasteClipboard":
        this.setHandler("paste-clipboard", newValue)
        break
      case "onPreeditChanged":
        this.setHandler("preedit-changed", newValue)
        break
      case "onSelectAll":
        this.setHandler("select-all", newValue)
        break
      case "onSetAnchor":
        this.setHandler("set-anchor", newValue)
        break
      case "onToggleCursorVisible":
        this.setHandler("toggle-cursor-visible", newValue)
        break
      case "onToggleOverwrite":
        this.setHandler("toggle-overwrite", newValue)
        break
    }
  }
}
