import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class ProgressBar<
  T extends Gtk.ProgressBar = Gtk.ProgressBar,
> extends Widget<T> {
  createNode() {
    return new Gtk.ProgressBar({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "ellipsize":
        if (this.node.getEllipsize() !== newValue) {
          this.node.setEllipsize(newValue)
        }
        break
      case "fraction":
        if (this.node.getFraction() !== newValue) {
          this.node.setFraction(newValue)
        }
        break
      case "inverted":
        if (this.node.getInverted() !== newValue) {
          this.node.setInverted(newValue)
        }
        break
      case "pulseStep":
        if (this.node.getPulseStep() !== newValue) {
          this.node.setPulseStep(newValue)
        }
        break
      case "showText":
        if (this.node.getShowText() !== newValue) {
          this.node.setShowText(newValue)
        }
        break
      case "text":
        if (this.node.getText() !== newValue) {
          this.node.setText(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "orientation":
        if (this.node.getOrientation() !== newValue) {
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
      /* istanbul ignore next */
      default:
        break
    }
  }
}
