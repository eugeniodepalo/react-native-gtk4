import { Container, Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class ProgressBar<T extends Gtk.ProgressBar> extends Widget<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ProgressBar() as T
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
      case "orientation":
        this.node.setOrientation(newValue)
        break
    }
  }
}
