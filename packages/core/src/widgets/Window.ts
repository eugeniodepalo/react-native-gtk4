import { Container, Gtk } from ".."
import Widget from "../widget"

export default class Window extends Widget {
  createNode(container: Container) {
    return new Gtk.Window()
  }
  appendChild(child: Widget) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget) {
    this.node.setChild(null)
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
        this.node.setDefaultHeight(newValue)
        break
      case "defaultWidget":
        this.node.setDefaultWidget(newValue)
        break
      case "defaultWidth":
        this.node.setDefaultWidth(newValue)
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
        this.node.setFocusWidget(newValue)
        break
      case "fullscreened":
        this.node.setFullscreened(newValue)
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
      case "isActive":
        this.node.setIsActive(newValue)
        break
      case "maximized":
        this.node.setMaximized(newValue)
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
        this.node.setAccessibleRole(newValue)
        break
      case "onActivateDefault":
        if (oldValue) {
          this.node.off("activate-default", oldValue)
        }
        if (newValue) {
          this.node.on("activate-default", newValue)
        }
        break
      case "onActivateFocus":
        if (oldValue) {
          this.node.off("activate-focus", oldValue)
        }
        if (newValue) {
          this.node.on("activate-focus", newValue)
        }
        break
      case "onCloseRequest":
        if (oldValue) {
          this.node.off("close-request", oldValue)
        }
        if (newValue) {
          this.node.on("close-request", newValue)
        }
        break
      case "onEnableDebugging":
        if (oldValue) {
          this.node.off("enable-debugging", oldValue)
        }
        if (newValue) {
          this.node.on("enable-debugging", newValue)
        }
        break
      case "onKeysChanged":
        if (oldValue) {
          this.node.off("keys-changed", oldValue)
        }
        if (newValue) {
          this.node.on("keys-changed", newValue)
        }
        break
      default:
        break
    }
  }
}
