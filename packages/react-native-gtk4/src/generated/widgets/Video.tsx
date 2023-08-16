import Gtk from "@girs/node-gtk-4.0"
import Widget from "./Widget.js"

export default class Video<T extends Gtk.Video = Gtk.Video> extends Widget<T> {
  static createNode() {
    return new Gtk.Video({})
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "autoplay":
        this.node.setAutoplay(newValue)
        break
      case "file":
        this.node.setFile(newValue)
        break
      case "loop":
        this.node.setLoop(newValue)
        break
      case "mediaStream":
        this.node.setMediaStream(newValue)
        break
      case "accessibleRole":
        this.node.accessibleRole = newValue
        break
      case "onNotifyAutoplay":
        this.setHandler("notify::autoplay", newValue)
        break
      case "onNotifyFile":
        this.setHandler("notify::file", newValue)
        break
      case "onNotifyLoop":
        this.setHandler("notify::loop", newValue)
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
