import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Window<T extends Gtk.Window> extends Widget<T> {
  createNode() {
    return new Gtk.Window({}) as T
  }
  appendChild(child: Widget<any>) {
    super.appendChild(child)
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    super.removeChild(child)
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    super.insertBefore(child, beforeChild)
    this.node.setChild(child.node)
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "application":
        this.node.setApplication(newValue)
        break
      case "decorated":
        this.node.setDecorated(newValue)
        break
      case "defaultHeight":
        this.node.defaultHeight = newValue
        break
      case "defaultWidget":
        this.node.setDefaultWidget(newValue)
        break
      case "defaultWidth":
        this.node.defaultWidth = newValue
        break
      case "deletable":
        this.node.setDeletable(newValue)
        break
      case "destroyWithParent":
        this.node.setDestroyWithParent(newValue)
        break
      case "display":
        this.node.setDisplay(newValue)
        break
      case "focusVisible":
        this.node.setFocusVisible(newValue)
        break
      case "focusWidget":
        this.node.focusWidget = newValue
        break
      case "fullscreened":
        this.node.fullscreened = newValue
        break
      case "handleMenubarAccel":
        this.node.setHandleMenubarAccel(newValue)
        break
      case "hideOnClose":
        this.node.setHideOnClose(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
        break
      case "maximized":
        this.node.maximized = newValue
        break
      case "mnemonicsVisible":
        this.node.setMnemonicsVisible(newValue)
        break
      case "modal":
        this.node.setModal(newValue)
        break
      case "resizable":
        this.node.setResizable(newValue)
        break
      case "startupId":
        this.node.setStartupId(newValue)
        break
      case "title":
        this.node.setTitle(newValue)
        break
      case "titlebar":
        this.node.setTitlebar(newValue)
        break
      case "transientFor":
        this.node.setTransientFor(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
    }
  }
}
