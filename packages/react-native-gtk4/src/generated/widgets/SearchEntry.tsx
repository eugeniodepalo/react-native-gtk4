import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class SearchEntry<T extends Gtk.SearchEntry> extends Widget<T> {
  createNode() {
    return new Gtk.SearchEntry({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "activatesDefault":
        this.node.activatesDefault = newValue
        break
      case "placeholderText":
        this.node.setPlaceholderText(newValue)
        break
      case "searchDelay":
        this.node.setSearchDelay(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
      case "onNextMatch":
        if (oldValue) {
          this.node.off("next-match", oldValue)
        }
        if (newValue) {
          this.node.on("next-match", newValue)
        }
        break
      case "onPreviousMatch":
        if (oldValue) {
          this.node.off("previous-match", oldValue)
        }
        if (newValue) {
          this.node.on("previous-match", newValue)
        }
        break
      case "onSearchChanged":
        if (oldValue) {
          this.node.off("search-changed", oldValue)
        }
        if (newValue) {
          this.node.on("search-changed", newValue)
        }
        break
      case "onSearchStarted":
        if (oldValue) {
          this.node.off("search-started", oldValue)
        }
        if (newValue) {
          this.node.on("search-started", newValue)
        }
        break
      case "onStopSearch":
        if (oldValue) {
          this.node.off("stop-search", oldValue)
        }
        if (newValue) {
          this.node.on("stop-search", newValue)
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
