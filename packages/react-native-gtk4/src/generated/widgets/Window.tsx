import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../abstract/widget.js"

export default class Window<
  T extends Gtk.Window = Gtk.Window,
> extends Widget<T> {
  createNode() {
    return new Gtk.Window({}) as T
  }
  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: AbstractWidget) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "application":
        if (this.node.getApplication() !== newValue) {
          this.node.setApplication(newValue)
        }
        break
      case "decorated":
        if (this.node.getDecorated() !== newValue) {
          this.node.setDecorated(newValue)
        }
        break
      case "defaultHeight":
        if (this.node.defaultHeight !== newValue) {
          this.node.defaultHeight = newValue
        }
        break
      case "defaultWidget":
        if (this.node.getDefaultWidget() !== newValue) {
          this.node.setDefaultWidget(newValue)
        }
        break
      case "defaultWidth":
        if (this.node.defaultWidth !== newValue) {
          this.node.defaultWidth = newValue
        }
        break
      case "deletable":
        if (this.node.getDeletable() !== newValue) {
          this.node.setDeletable(newValue)
        }
        break
      case "destroyWithParent":
        if (this.node.getDestroyWithParent() !== newValue) {
          this.node.setDestroyWithParent(newValue)
        }
        break
      case "display":
        if (this.node.display !== newValue) {
          this.node.setDisplay(newValue)
        }
        break
      case "focusVisible":
        if (this.node.getFocusVisible() !== newValue) {
          this.node.setFocusVisible(newValue)
        }
        break
      case "focusWidget":
        if (this.node.focusWidget !== newValue) {
          this.node.focusWidget = newValue
        }
        break
      case "fullscreened":
        if (this.node.fullscreened !== newValue) {
          this.node.fullscreened = newValue
        }
        break
      case "handleMenubarAccel":
        if (this.node.getHandleMenubarAccel() !== newValue) {
          this.node.setHandleMenubarAccel(newValue)
        }
        break
      case "hideOnClose":
        if (this.node.getHideOnClose() !== newValue) {
          this.node.setHideOnClose(newValue)
        }
        break
      case "iconName":
        if (this.node.getIconName() !== newValue) {
          this.node.setIconName(newValue)
        }
        break
      case "maximized":
        if (this.node.maximized !== newValue) {
          this.node.maximized = newValue
        }
        break
      case "mnemonicsVisible":
        if (this.node.getMnemonicsVisible() !== newValue) {
          this.node.setMnemonicsVisible(newValue)
        }
        break
      case "modal":
        if (this.node.getModal() !== newValue) {
          this.node.setModal(newValue)
        }
        break
      case "resizable":
        if (this.node.getResizable() !== newValue) {
          this.node.setResizable(newValue)
        }
        break
      case "startupId":
        if (this.node.startupId !== newValue) {
          this.node.setStartupId(newValue)
        }
        break
      case "title":
        if (this.node.getTitle() !== newValue) {
          this.node.setTitle(newValue)
        }
        break
      case "titlebar":
        if (this.node.getTitlebar() !== newValue) {
          this.node.setTitlebar(newValue)
        }
        break
      case "transientFor":
        if (this.node.getTransientFor() !== newValue) {
          this.node.setTransientFor(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onActivateDefault":
        this.setHandler("activate-default", newValue)
        break
      case "onActivateFocus":
        this.setHandler("activate-focus", newValue)
        break
      case "onCloseRequest":
        this.setHandler("close-request", newValue)
        break
      case "onEnableDebugging":
        this.setHandler("enable-debugging", newValue)
        break
      case "onKeysChanged":
        this.setHandler("keys-changed", newValue)
        break
      case "onNotifyApplication":
        this.setHandler("notify::application", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyDecorated":
        this.setHandler("notify::decorated", newValue)
        break
      case "onNotifyDefaultHeight":
        this.setHandler("notify::default-height", newValue)
        break
      case "onNotifyDefaultWidget":
        this.setHandler("notify::default-widget", newValue)
        break
      case "onNotifyDefaultWidth":
        this.setHandler("notify::default-width", newValue)
        break
      case "onNotifyDeletable":
        this.setHandler("notify::deletable", newValue)
        break
      case "onNotifyDestroyWithParent":
        this.setHandler("notify::destroy-with-parent", newValue)
        break
      case "onNotifyDisplay":
        this.setHandler("notify::display", newValue)
        break
      case "onNotifyFocusVisible":
        this.setHandler("notify::focus-visible", newValue)
        break
      case "onNotifyFocusWidget":
        this.setHandler("notify::focus-widget", newValue)
        break
      case "onNotifyFullscreened":
        this.setHandler("notify::fullscreened", newValue)
        break
      case "onNotifyHandleMenubarAccel":
        this.setHandler("notify::handle-menubar-accel", newValue)
        break
      case "onNotifyHideOnClose":
        this.setHandler("notify::hide-on-close", newValue)
        break
      case "onNotifyIconName":
        this.setHandler("notify::icon-name", newValue)
        break
      case "onNotifyIsActive":
        this.setHandler("notify::is-active", newValue)
        break
      case "onNotifyMaximized":
        this.setHandler("notify::maximized", newValue)
        break
      case "onNotifyMnemonicsVisible":
        this.setHandler("notify::mnemonics-visible", newValue)
        break
      case "onNotifyModal":
        this.setHandler("notify::modal", newValue)
        break
      case "onNotifyResizable":
        this.setHandler("notify::resizable", newValue)
        break
      case "onNotifyStartupId":
        this.setHandler("notify::startup-id", newValue)
        break
      case "onNotifyTitle":
        this.setHandler("notify::title", newValue)
        break
      case "onNotifyTitlebar":
        this.setHandler("notify::titlebar", newValue)
        break
      case "onNotifyTransientFor":
        this.setHandler("notify::transient-for", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
