import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"
import AbstractWidget from "../../widget.js"

export default class ScrolledWindow<
  T extends Gtk.ScrolledWindow = Gtk.ScrolledWindow,
> extends Widget<T> {
  static createNode() {
    return new Gtk.ScrolledWindow({})
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
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "hscrollbarPolicy":
        this.node.hscrollbarPolicy = newValue
        break
      case "kineticScrolling":
        this.node.setKineticScrolling(newValue)
        break
      case "maxContentHeight":
        this.node.setMaxContentHeight(newValue)
        break
      case "maxContentWidth":
        this.node.setMaxContentWidth(newValue)
        break
      case "minContentHeight":
        this.node.setMinContentHeight(newValue)
        break
      case "minContentWidth":
        this.node.setMinContentWidth(newValue)
        break
      case "overlayScrolling":
        this.node.setOverlayScrolling(newValue)
        break
      case "propagateNaturalHeight":
        this.node.setPropagateNaturalHeight(newValue)
        break
      case "propagateNaturalWidth":
        this.node.setPropagateNaturalWidth(newValue)
        break
      case "vadjustment":
        this.node.setVadjustment(newValue)
        break
      case "vscrollbarPolicy":
        this.node.vscrollbarPolicy = newValue
        break
      case "windowPlacement":
        this.node.windowPlacement = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onEdgeOvershot":
        this.setHandler("edge-overshot", newValue)
        break
      case "onEdgeReached":
        this.setHandler("edge-reached", newValue)
        break
      case "onMoveFocusOut":
        this.setHandler("move-focus-out", newValue)
        break
      case "onScrollChild":
        this.setHandler("scroll-child", newValue)
        break
      case "onNotifyChild":
        this.setHandler("notify::child", newValue)
        break
      case "onNotifyHadjustment":
        this.setHandler("notify::hadjustment", newValue)
        break
      case "onNotifyHasFrame":
        this.setHandler("notify::has-frame", newValue)
        break
      case "onNotifyHscrollbarPolicy":
        this.setHandler("notify::hscrollbar-policy", newValue)
        break
      case "onNotifyKineticScrolling":
        this.setHandler("notify::kinetic-scrolling", newValue)
        break
      case "onNotifyMaxContentHeight":
        this.setHandler("notify::max-content-height", newValue)
        break
      case "onNotifyMaxContentWidth":
        this.setHandler("notify::max-content-width", newValue)
        break
      case "onNotifyMinContentHeight":
        this.setHandler("notify::min-content-height", newValue)
        break
      case "onNotifyMinContentWidth":
        this.setHandler("notify::min-content-width", newValue)
        break
      case "onNotifyOverlayScrolling":
        this.setHandler("notify::overlay-scrolling", newValue)
        break
      case "onNotifyPropagateNaturalHeight":
        this.setHandler("notify::propagate-natural-height", newValue)
        break
      case "onNotifyPropagateNaturalWidth":
        this.setHandler("notify::propagate-natural-width", newValue)
        break
      case "onNotifyVadjustment":
        this.setHandler("notify::vadjustment", newValue)
        break
      case "onNotifyVscrollbarPolicy":
        this.setHandler("notify::vscrollbar-policy", newValue)
        break
      case "onNotifyWindowPlacement":
        this.setHandler("notify::window-placement", newValue)
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
