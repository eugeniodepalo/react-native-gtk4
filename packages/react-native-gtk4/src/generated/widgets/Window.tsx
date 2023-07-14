import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Window<T extends Gtk.Window> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.Window() as T
  }

  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
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
      case "defaultWidget":
        this.node.setDefaultWidget(newValue)
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
      case "handleMenubarAccel":
        this.node.setHandleMenubarAccel(newValue)
        break
      case "hideOnClose":
        this.node.setHideOnClose(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
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
    }
  }
}
