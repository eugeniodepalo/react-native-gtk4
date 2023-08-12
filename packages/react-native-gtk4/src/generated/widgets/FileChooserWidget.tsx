import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class FileChooserWidget<
  T extends Gtk.FileChooserWidget = Gtk.FileChooserWidget,
> extends Widget<T> {
  static createNode() {
    return new Gtk.FileChooserWidget({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "searchMode":
        if (this.node.searchMode !== newValue) {
          this.node.searchMode = newValue
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "action":
        if (this.node.getAction() !== newValue) {
          this.node.setAction(newValue)
        }
        break
      case "createFolders":
        if (this.node.getCreateFolders() !== newValue) {
          this.node.setCreateFolders(newValue)
        }
        break
      case "filter":
        if (this.node.getFilter() !== newValue) {
          this.node.setFilter(newValue)
        }
        break
      case "selectMultiple":
        if (this.node.getSelectMultiple() !== newValue) {
          this.node.setSelectMultiple(newValue)
        }
        break
      case "onDesktopFolder":
        this.setHandler("desktop-folder", newValue)
        break
      case "onDownFolder":
        this.setHandler("down-folder", newValue)
        break
      case "onHomeFolder":
        this.setHandler("home-folder", newValue)
        break
      case "onLocationPopup":
        this.setHandler("location-popup", newValue)
        break
      case "onLocationPopupOnPaste":
        this.setHandler("location-popup-on-paste", newValue)
        break
      case "onLocationTogglePopup":
        this.setHandler("location-toggle-popup", newValue)
        break
      case "onPlacesShortcut":
        this.setHandler("places-shortcut", newValue)
        break
      case "onQuickBookmark":
        this.setHandler("quick-bookmark", newValue)
        break
      case "onRecentShortcut":
        this.setHandler("recent-shortcut", newValue)
        break
      case "onSearchShortcut":
        this.setHandler("search-shortcut", newValue)
        break
      case "onShowHidden":
        this.setHandler("show-hidden", newValue)
        break
      case "onUpFolder":
        this.setHandler("up-folder", newValue)
        break
      case "onNotifySearchMode":
        this.setHandler("notify::search-mode", newValue)
        break
      case "onNotifyShowTime":
        this.setHandler("notify::show-time", newValue)
        break
      case "onNotifySubtitle":
        this.setHandler("notify::subtitle", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyAction":
        this.setHandler("notify::action", newValue)
        break
      case "onNotifyCreateFolders":
        this.setHandler("notify::create-folders", newValue)
        break
      case "onNotifyFilter":
        this.setHandler("notify::filter", newValue)
        break
      case "onNotifyFilters":
        this.setHandler("notify::filters", newValue)
        break
      case "onNotifySelectMultiple":
        this.setHandler("notify::select-multiple", newValue)
        break
      case "onNotifyShortcutFolders":
        this.setHandler("notify::shortcut-folders", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
