import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ProgressBar<
  T extends Gtk.ProgressBar = Gtk.ProgressBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.ProgressBar({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "ellipsize":
        this.node.setEllipsize(newValue)
        break
      case "fraction":
        this.node.setFraction(newValue)
        break
      case "inverted":
        this.node.setInverted(newValue)
        break
      case "pulseStep":
        this.node.setPulseStep(newValue)
        break
      case "showText":
        this.node.setShowText(newValue)
        break
      case "text":
        this.node.setText(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyEllipsize":
        this.setHandler("notify::ellipsize", newValue)
        break
      case "onNotifyFraction":
        this.setHandler("notify::fraction", newValue)
        break
      case "onNotifyInverted":
        this.setHandler("notify::inverted", newValue)
        break
      case "onNotifyPulseStep":
        this.setHandler("notify::pulse-step", newValue)
        break
      case "onNotifyShowText":
        this.setHandler("notify::show-text", newValue)
        break
      case "onNotifyText":
        this.setHandler("notify::text", newValue)
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
