import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class MediaControls<
  T extends Gtk.MediaControls = Gtk.MediaControls,
> extends Widget<T> {
  createNode() {
    return new Gtk.MediaControls({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "mediaStream":
        if (this.node.getMediaStream() !== newValue) {
          this.node.setMediaStream(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole() !== newValue) {
          this.node.accessibleRole = newValue
        }
        break
      case "onNotifyMediaStream":
        this.setHandler("notify::media-stream", newValue)
        break
      case "onNotifyAccessibleRole":
        this.setHandler("notify::accessible-role", newValue)
        break
      default:
        break
    }
  }
}
