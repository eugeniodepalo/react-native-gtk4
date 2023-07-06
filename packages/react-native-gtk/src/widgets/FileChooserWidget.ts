import { Container, Gtk } from ".."
import Widget from "../widget"

export default class FileChooserWidget extends Widget {
  createNode(container: Container) {
    return new Gtk.FileChooserWidget()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "searchMode":
        this.node.setSearchMode(newValue)
        break
      case "showTime":
        this.node.setShowTime(newValue)
        break
      case "subtitle":
        this.node.setSubtitle(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "action":
        this.node.setAction(newValue)
        break
      case "createFolders":
        this.node.setCreateFolders(newValue)
        break
      case "filter":
        this.node.setFilter(newValue)
        break
      case "filters":
        this.node.setFilters(newValue)
        break
      case "selectMultiple":
        this.node.setSelectMultiple(newValue)
        break
      case "shortcutFolders":
        this.node.setShortcutFolders(newValue)
        break
      case "onDesktopFolder":
        if (oldValue) {
          this.node.off("desktop-folder", oldValue)
        }
        if (newValue) {
          this.node.on("desktop-folder", newValue)
        }
        break
      case "onDownFolder":
        if (oldValue) {
          this.node.off("down-folder", oldValue)
        }
        if (newValue) {
          this.node.on("down-folder", newValue)
        }
        break
      case "onHomeFolder":
        if (oldValue) {
          this.node.off("home-folder", oldValue)
        }
        if (newValue) {
          this.node.on("home-folder", newValue)
        }
        break
      case "onLocationPopup":
        if (oldValue) {
          this.node.off("location-popup", oldValue)
        }
        if (newValue) {
          this.node.on("location-popup", newValue)
        }
        break
      case "onLocationPopupOnPaste":
        if (oldValue) {
          this.node.off("location-popup-on-paste", oldValue)
        }
        if (newValue) {
          this.node.on("location-popup-on-paste", newValue)
        }
        break
      case "onLocationTogglePopup":
        if (oldValue) {
          this.node.off("location-toggle-popup", oldValue)
        }
        if (newValue) {
          this.node.on("location-toggle-popup", newValue)
        }
        break
      case "onPlacesShortcut":
        if (oldValue) {
          this.node.off("places-shortcut", oldValue)
        }
        if (newValue) {
          this.node.on("places-shortcut", newValue)
        }
        break
      case "onQuickBookmark":
        if (oldValue) {
          this.node.off("quick-bookmark", oldValue)
        }
        if (newValue) {
          this.node.on("quick-bookmark", newValue)
        }
        break
      case "onRecentShortcut":
        if (oldValue) {
          this.node.off("recent-shortcut", oldValue)
        }
        if (newValue) {
          this.node.on("recent-shortcut", newValue)
        }
        break
      case "onSearchShortcut":
        if (oldValue) {
          this.node.off("search-shortcut", oldValue)
        }
        if (newValue) {
          this.node.on("search-shortcut", newValue)
        }
        break
      case "onShowHidden":
        if (oldValue) {
          this.node.off("show-hidden", oldValue)
        }
        if (newValue) {
          this.node.on("show-hidden", newValue)
        }
        break
      case "onUpFolder":
        if (oldValue) {
          this.node.off("up-folder", oldValue)
        }
        if (newValue) {
          this.node.on("up-folder", newValue)
        }
        break
      default:
        break
    }
  }
}
