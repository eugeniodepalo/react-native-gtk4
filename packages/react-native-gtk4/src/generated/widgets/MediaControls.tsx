import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class MediaControls<
  T extends Gtk.MediaControls = Gtk.MediaControls,
> extends Widget<T> {
  static createNode() {
    return new Gtk.MediaControls({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "mediaStream":
        this.node.setMediaStream(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyMediaStream":
        this.setHandler("notify::media-stream", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      /* istanbul ignore next */
      default:
        break
    }
  }
}
