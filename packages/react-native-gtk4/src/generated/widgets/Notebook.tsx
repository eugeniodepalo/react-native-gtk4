import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Notebook<
  T extends Gtk.Notebook = Gtk.Notebook,
> extends Widget<T> {
  createNode() {
    return new Gtk.Notebook({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "enablePopup":
        if (this.node.enablePopup !== newValue) {
          this.node.enablePopup = newValue
        }
        break
      case "groupName":
        if (this.node.getGroupName !== newValue) {
          this.node.setGroupName(newValue)
        }
        break
      case "page":
        if (this.node.getPage !== newValue) {
          this.node.page = newValue
        }
        break
      case "scrollable":
        if (this.node.getScrollable !== newValue) {
          this.node.setScrollable(newValue)
        }
        break
      case "showBorder":
        if (this.node.getShowBorder !== newValue) {
          this.node.setShowBorder(newValue)
        }
        break
      case "showTabs":
        if (this.node.getShowTabs !== newValue) {
          this.node.setShowTabs(newValue)
        }
        break
      case "tabPos":
        if (this.node.getTabPos !== newValue) {
          this.node.setTabPos(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onChangeCurrentPage":
        this.setHandler("change-current-page", newValue)
        break
      case "onCreateWindow":
        this.setHandler("create-window", newValue)
        break
      case "onFocusTab":
        this.setHandler("focus-tab", newValue)
        break
      case "onMoveFocusOut":
        this.setHandler("move-focus-out", newValue)
        break
      case "onPageAdded":
        this.setHandler("page-added", newValue)
        break
      case "onPageRemoved":
        this.setHandler("page-removed", newValue)
        break
      case "onPageReordered":
        this.setHandler("page-reordered", newValue)
        break
      case "onReorderTab":
        this.setHandler("reorder-tab", newValue)
        break
      case "onSelectPage":
        this.setHandler("select-page", newValue)
        break
      case "onSwitchPage":
        this.setHandler("switch-page", newValue)
        break
      case "onNotifyEnablePopup":
        this.setHandler("notify::enable-popup", newValue)
        break
      case "onNotifyGroupName":
        this.setHandler("notify::group-name", newValue)
        break
      case "onNotifyPage":
        this.setHandler("notify::page", newValue)
        break
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue)
        break
      case "onNotifyScrollable":
        this.setHandler("notify::scrollable", newValue)
        break
      case "onNotifyShowBorder":
        this.setHandler("notify::show-border", newValue)
        break
      case "onNotifyShowTabs":
        this.setHandler("notify::show-tabs", newValue)
        break
      case "onNotifyTabPos":
        this.setHandler("notify::tab-pos", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
