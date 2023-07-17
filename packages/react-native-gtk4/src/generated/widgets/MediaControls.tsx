import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class MediaControls<
  T extends Gtk.MediaControls = Gtk.MediaControls,
> extends Widget<T> {
  createNode() {
    return new Gtk.MediaControls({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
    }
  }
}
