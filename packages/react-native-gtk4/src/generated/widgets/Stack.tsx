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
        this.node.setHhomogeneous(newValue)
        break
      case "interpolateSize":
        this.node.setInterpolateSize(newValue)
        break
      case "transitionDuration":
        this.node.setTransitionDuration(newValue)
        break
      case "transitionType":
        this.node.setTransitionType(newValue)
        break
      case "vhomogeneous":
        this.node.setVhomogeneous(newValue)
        break
      case "visibleChild":
        this.node.setVisibleChild(newValue)
        break
      case "visibleChildName":
        this.node.setVisibleChildName(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
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
