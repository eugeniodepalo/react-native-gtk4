import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Button<T extends Gtk.Button> extends Widget<T> {
  createNode() {
    return new Gtk.Button({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "hasFrame":
        this.node.setHasFrame(newValue)
        break
      case "iconName":
        this.node.setIconName(newValue)
        break
      case "label":
        this.node.setLabel(newValue)
        break
      case "useUnderline":
        this.node.setUseUnderline(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "actionName":
        this.node.setActionName(newValue)
        break
      case "actionTarget":
        this.node.setActionTargetValue(newValue)
        break
      case "onActivate":
        this.setHandler("activate", newValue)
        break
      case "onClicked":
        this.setHandler("clicked", newValue)
        break
    }
  }
}
