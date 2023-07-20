import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Stack<T extends Gtk.Stack = Gtk.Stack> extends Widget<T> {
  createNode() {
    return new Gtk.Stack({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "hhomogeneous":
        if (this.node.getHhomogeneous !== newValue) {
          this.node.setHhomogeneous(newValue)
        }
        break
      case "interpolateSize":
        if (this.node.getInterpolateSize !== newValue) {
          this.node.setInterpolateSize(newValue)
        }
        break
      case "transitionDuration":
        if (this.node.getTransitionDuration !== newValue) {
          this.node.setTransitionDuration(newValue)
        }
        break
      case "transitionType":
        if (this.node.getTransitionType !== newValue) {
          this.node.setTransitionType(newValue)
        }
        break
      case "vhomogeneous":
        if (this.node.getVhomogeneous !== newValue) {
          this.node.setVhomogeneous(newValue)
        }
        break
      case "visibleChild":
        if (this.node.getVisibleChild !== newValue) {
          this.node.setVisibleChild(newValue)
        }
        break
      case "visibleChildName":
        if (this.node.getVisibleChildName !== newValue) {
          this.node.setVisibleChildName(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
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
