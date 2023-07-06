import { Container, Gtk } from ".."
import Widget from "./Widget"

export default class ScrolledWindow extends Widget {
  createNode(container: Container) {
    return new Gtk.ScrolledWindow()
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
      case "hadjustment":
        this.node.setHadjustment(newValue)
        break
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "hscrollbarPolicy":
        this.node.setHscrollbarPolicy(newValue)
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
        this.node.setVscrollbarPolicy(newValue)
        break
      case "windowPlacement":
        this.node.setWindowPlacement(newValue)
        break
      case "accessibleRole":
        this.node.setAccessibleRole(newValue)
        break
      case "onEdgeOvershot":
        if (oldValue) {
          this.node.off("edge-overshot", oldValue)
        }
        if (newValue) {
          this.node.on("edge-overshot", newValue)
        }
        break
      case "onEdgeReached":
        if (oldValue) {
          this.node.off("edge-reached", oldValue)
        }
        if (newValue) {
          this.node.on("edge-reached", newValue)
        }
        break
      case "onMoveFocusOut":
        if (oldValue) {
          this.node.off("move-focus-out", oldValue)
        }
        if (newValue) {
          this.node.on("move-focus-out", newValue)
        }
        break
      case "onScrollChild":
        if (oldValue) {
          this.node.off("scroll-child", oldValue)
        }
        if (newValue) {
          this.node.on("scroll-child", newValue)
        }
        break
      default:
        break
    }
  }
}
