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
        if (this.node.ellipsize !== newValue) {
          this.node.setEllipsize(newValue)
        }
        break
      case "fraction":
        if (this.node.fraction !== newValue) {
          this.node.setFraction(newValue)
        }
        break
      case "inverted":
        if (this.node.inverted !== newValue) {
          this.node.setInverted(newValue)
        }
        break
      case "pulseStep":
        if (this.node.pulseStep !== newValue) {
          this.node.setPulseStep(newValue)
        }
        break
      case "showText":
        if (this.node.showText !== newValue) {
          this.node.setShowText(newValue)
        }
        break
      case "text":
        if (this.node.text !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.accessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.orientation !== newValue) {
          this.node.setOrientation(newValue)
        }
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
