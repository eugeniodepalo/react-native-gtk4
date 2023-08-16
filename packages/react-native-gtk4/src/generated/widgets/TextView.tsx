import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class TextView<
  T extends Gtk.TextView = Gtk.TextView,
> extends Widget<T> {
  static createNode() {
    return new Gtk.TextView({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
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
      case "onNotifyAcceptsTab":
        this.setHandler("notify::accepts-tab", newValue)
        break
      case "onNotifyBottomMargin":
        this.setHandler("notify::bottom-margin", newValue)
        break
      case "onNotifyBuffer":
        this.setHandler("notify::buffer", newValue)
        break
      case "onNotifyCursorVisible":
        this.setHandler("notify::cursor-visible", newValue)
        break
      case "onNotifyEditable":
        this.setHandler("notify::editable", newValue)
        break
      case "onNotifyExtraMenu":
        this.setHandler("notify::extra-menu", newValue)
        break
      case "onNotifyImModule":
        this.setHandler("notify::im-module", newValue)
        break
      case "onNotifyIndent":
        this.setHandler("notify::indent", newValue)
        break
      case "onNotifyInputHints":
        this.setHandler("notify::input-hints", newValue)
        break
      case "onNotifyInputPurpose":
        this.setHandler("notify::input-purpose", newValue)
        break
      case "onNotifyJustification":
        this.setHandler("notify::justification", newValue)
        break
      case "onNotifyLeftMargin":
        this.setHandler("notify::left-margin", newValue)
        break
      case "onNotifyMonospace":
        this.setHandler("notify::monospace", newValue)
        break
      case "onNotifyOverwrite":
        this.setHandler("notify::overwrite", newValue)
        break
      case "onNotifyPixelsAboveLines":
        this.setHandler("notify::pixels-above-lines", newValue)
        break
      case "onNotifyPixelsBelowLines":
        this.setHandler("notify::pixels-below-lines", newValue)
        break
      case "onNotifyPixelsInsideWrap":
        this.setHandler("notify::pixels-inside-wrap", newValue)
        break
      case "onNotifyRightMargin":
        this.setHandler("notify::right-margin", newValue)
        break
      case "onNotifyTabs":
        this.setHandler("notify::tabs", newValue)
        break
      case "onNotifyTopMargin":
        this.setHandler("notify::top-margin", newValue)
        break
      case "onNotifyWrapMode":
        this.setHandler("notify::wrap-mode", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHscrollPolicy":
        this.setHandler("notify::hscroll-policy", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollPolicy":
        this.setHandler("notify::vscroll-policy", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
