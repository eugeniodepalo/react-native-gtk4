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
    }
  }
}
