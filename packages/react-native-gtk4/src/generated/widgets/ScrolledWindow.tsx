import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ScrolledWindow<
  T extends Gtk.ScrolledWindow,
> extends Widget<T> {
  createNode(props: Record<string, any>) {
    return new Gtk.ScrolledWindow() as T
  }
  appendChild(child: Widget<any>) {
    this.node.setChild(child.node)
  }
  removeChild(child: Widget<any>) {
    this.node.setChild(null)
  }
  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    this.node.setChild(child.node)
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
    }
  }
}
