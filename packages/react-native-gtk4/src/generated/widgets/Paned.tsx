import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Paned<T extends Gtk.Paned> extends Widget<T> {
  createNode() {
    return new Gtk.Paned({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "endChild":
        this.node.setEndChild(newValue)
        break
      case "position":
        this.node.setPosition(newValue)
        break
      case "positionSet":
        this.node.positionSet = newValue
        break
      case "resizeEndChild":
        this.node.setResizeEndChild(newValue)
        break
      case "resizeStartChild":
        this.node.setResizeStartChild(newValue)
        break
      case "shrinkEndChild":
        this.node.setShrinkEndChild(newValue)
        break
      case "shrinkStartChild":
        this.node.setShrinkStartChild(newValue)
        break
      case "startChild":
        this.node.setStartChild(newValue)
        break
      case "wideHandle":
        this.node.setWideHandle(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onAcceptPosition":
        this.setHandler("accept-position", newValue)
        break
      case "onCancelPosition":
        this.setHandler("cancel-position", newValue)
        break
      case "onCycleChildFocus":
        this.setHandler("cycle-child-focus", newValue)
        break
      case "onCycleHandleFocus":
        this.setHandler("cycle-handle-focus", newValue)
        break
      case "onMoveHandle":
        this.setHandler("move-handle", newValue)
        break
      case "onToggleHandleFocus":
        this.setHandler("toggle-handle-focus", newValue)
        break
      case "onNotifyEndChild":
        this.setHandler("notify::end-child", newValue)
        break
      case "onNotifyMaxPosition":
        this.setHandler("notify::max-position", newValue)
        break
      case "onNotifyMinPosition":
        this.setHandler("notify::min-position", newValue)
        break
      case "onNotifyPosition":
        this.setHandler("notify::position", newValue)
        break
      case "onNotifyPositionSet":
        this.setHandler("notify::position-set", newValue)
        break
      case "onNotifyResizeEndChild":
        this.setHandler("notify::resize-end-child", newValue)
        break
      case "onNotifyResizeStartChild":
        this.setHandler("notify::resize-start-child", newValue)
        break
      case "onNotifyShrinkEndChild":
        this.setHandler("notify::shrink-end-child", newValue)
        break
      case "onNotifyShrinkStartChild":
        this.setHandler("notify::shrink-start-child", newValue)
        break
      case "onNotifyStartChild":
        this.setHandler("notify::start-child", newValue)
        break
      case "onNotifyWideHandle":
        this.setHandler("notify::wide-handle", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      case "onNotifyOrientation":
        this.setHandler("notify::orientation", newValue)
        break
    }
  }
}
