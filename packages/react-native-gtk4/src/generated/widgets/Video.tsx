import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Video<T extends Gtk.Video> extends Widget<T> {
  createNode() {
    return new Gtk.Video({}) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
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
    }
  }
}
