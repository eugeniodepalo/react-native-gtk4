import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Notebook<T extends Gtk.Notebook> extends Widget<T> {
  createNode() {
    return new Gtk.Notebook() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "enablePopup":
        this.node.enablePopup = newValue
        break
      case "groupName":
        this.node.setGroupName(newValue)
        break
      case "page":
        this.node.page = newValue
        break
      case "scrollable":
        this.node.setScrollable(newValue)
        break
      case "showBorder":
        this.node.setShowBorder(newValue)
        break
      case "showTabs":
        this.node.setShowTabs(newValue)
        break
      case "tabPos":
        this.node.setTabPos(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onChangeCurrentPage":
        if (oldValue) {
          this.node.off("change-current-page", oldValue)
        }
        if (newValue) {
          this.node.on("change-current-page", newValue)
        }
        break
      case "onCreateWindow":
        if (oldValue) {
          this.node.off("create-window", oldValue)
        }
        if (newValue) {
          this.node.on("create-window", newValue)
        }
        break
      case "onFocusTab":
        if (oldValue) {
          this.node.off("focus-tab", oldValue)
        }
        if (newValue) {
          this.node.on("focus-tab", newValue)
        }
        break
      case "onMoveFocusOut":
        if (oldValue) {
          this.node.off("move-focus-out", oldValue)
        }
        if (newValue) {
          this.node.on("move-focus-out", newValue)
        }
        break
      case "onPageAdded":
        if (oldValue) {
          this.node.off("page-added", oldValue)
        }
        if (newValue) {
          this.node.on("page-added", newValue)
        }
        break
      case "onPageRemoved":
        if (oldValue) {
          this.node.off("page-removed", oldValue)
        }
        if (newValue) {
          this.node.on("page-removed", newValue)
        }
        break
      case "onPageReordered":
        if (oldValue) {
          this.node.off("page-reordered", oldValue)
        }
        if (newValue) {
          this.node.on("page-reordered", newValue)
        }
        break
      case "onReorderTab":
        if (oldValue) {
          this.node.off("reorder-tab", oldValue)
        }
        if (newValue) {
          this.node.on("reorder-tab", newValue)
        }
        break
      case "onSelectPage":
        if (oldValue) {
          this.node.off("select-page", oldValue)
        }
        if (newValue) {
          this.node.on("select-page", newValue)
        }
        break
      case "onSwitchPage":
        if (oldValue) {
          this.node.off("switch-page", oldValue)
        }
        if (newValue) {
          this.node.on("switch-page", newValue)
        }
        break
    }
  }
}
