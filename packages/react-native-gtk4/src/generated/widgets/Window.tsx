import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Window<T extends Gtk.Window> extends Widget<T> {
  createNode() {
    return new Gtk.Window({}) as T
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
    }
  }
}
