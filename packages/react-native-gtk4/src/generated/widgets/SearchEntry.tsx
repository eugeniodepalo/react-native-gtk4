import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SearchEntry<
  T extends Gtk.SearchEntry = Gtk.SearchEntry,
> extends Widget<T> {
  createNode() {
    return new Gtk.SearchEntry({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "activatesDefault":
        if (this.node.activatesDefault !== newValue) {
          this.node.activatesDefault = newValue
        }
        break
      case "placeholderText":
        if (this.node.getPlaceholderText !== newValue) {
          this.node.setPlaceholderText(newValue)
        }
        break
      case "searchDelay":
        if (this.node.getSearchDelay !== newValue) {
          this.node.setSearchDelay(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "editable":
        if (this.node.getEditable !== newValue) {
          this.node.setEditable(newValue)
        }
        break
      case "enableUndo":
        if (this.node.getEnableUndo !== newValue) {
          this.node.setEnableUndo(newValue)
        }
        break
      case "maxWidthChars":
        if (this.node.getMaxWidthChars !== newValue) {
          this.node.setMaxWidthChars(newValue)
        }
        break
      case "text":
        if (this.node.getText !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "widthChars":
        if (this.node.getWidthChars !== newValue) {
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
      case "onNextMatch":
        this.setHandler("next-match", newValue)
        break
      case "onPreviousMatch":
        this.setHandler("previous-match", newValue)
        break
      case "onSearchChanged":
        this.setHandler("search-changed", newValue)
        break
      case "onSearchStarted":
        this.setHandler("search-started", newValue)
        break
      case "onStopSearch":
        this.setHandler("stop-search", newValue)
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
      case "onNotifyPlaceholderText":
        this.setHandler("notify::placeholder-text", newValue)
        break
      case "onNotifySearchDelay":
        this.setHandler("notify::search-delay", newValue)
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
