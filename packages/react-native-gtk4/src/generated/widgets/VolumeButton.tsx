import Gtk from "@girs/node-gtk-4.0"
import ScaleButton from "./ScaleButton.js"

export default class VolumeButton<
  T extends Gtk.VolumeButton = Gtk.VolumeButton,
> extends ScaleButton<T> {
  static createNode() {
    return new Gtk.VolumeButton({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "useSymbolic":
        this.node.useSymbolic = newValue
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "orientation":
        this.node.setOrientation(newValue)
        break
      case "onNotifyUseSymbolic":
        this.setHandler("notify::use-symbolic", newValue)
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
