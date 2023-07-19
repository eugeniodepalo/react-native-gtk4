import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Stack<T extends Gtk.Stack = Gtk.Stack> extends Widget<T> {
  createNode() {
    return new Gtk.Stack({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hhomogeneous":
        if (this.node.hhomogeneous !== newValue) {
          this.node.setHhomogeneous(newValue)
        }
        break
      case "interpolateSize":
        if (this.node.interpolateSize !== newValue) {
          this.node.setInterpolateSize(newValue)
        }
        break
      case "transitionDuration":
        if (this.node.transitionDuration !== newValue) {
          this.node.setTransitionDuration(newValue)
        }
        break
      case "transitionType":
        if (this.node.transitionType !== newValue) {
          this.node.setTransitionType(newValue)
        }
        break
      case "vhomogeneous":
        if (this.node.vhomogeneous !== newValue) {
          this.node.setVhomogeneous(newValue)
        }
        break
      case "visibleChild":
        if (this.node.visibleChild !== newValue) {
          this.node.setVisibleChild(newValue)
        }
        break
      case "visibleChildName":
        if (this.node.visibleChildName !== newValue) {
          this.node.setVisibleChildName(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyHhomogeneous":
        this.setHandler("notify::hhomogeneous", newValue)
        break
      case "onNotifyInterpolateSize":
        this.setHandler("notify::interpolate-size", newValue)
        break
      case "onNotifyPages":
        this.setHandler("notify::pages", newValue)
        break
      case "onNotifyTransitionDuration":
        this.setHandler("notify::transition-duration", newValue)
        break
      case "onNotifyTransitionRunning":
        this.setHandler("notify::transition-running", newValue)
        break
      case "onNotifyTransitionType":
        this.setHandler("notify::transition-type", newValue)
        break
      case "onNotifyVhomogeneous":
        this.setHandler("notify::vhomogeneous", newValue)
        break
      case "onNotifyVisibleChild":
        this.setHandler("notify::visible-child", newValue)
        break
      case "onNotifyVisibleChildName":
        this.setHandler("notify::visible-child-name", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
    }
  }
}
