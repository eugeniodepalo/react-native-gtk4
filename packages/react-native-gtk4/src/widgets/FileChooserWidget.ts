import { Container, Gtk } from "../index.js"
import Widget from "./Widget.js"

export default class FileChooserWidget<
  T extends Gtk.FileChooserWidget,
> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.FileChooserWidget() as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "action":
        this.node.setAction(newValue)
        break
      case "createFolders":
        this.node.setCreateFolders(newValue)
        break
      case "filter":
        this.node.setFilter(newValue)
        break
      case "selectMultiple":
        this.node.setSelectMultiple(newValue)
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
