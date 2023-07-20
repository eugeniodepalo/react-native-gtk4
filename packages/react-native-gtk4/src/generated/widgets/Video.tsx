import { Gtk } from "../../index.js"
import Widget from "./Widget.js"

export default class Video<T extends Gtk.Video = Gtk.Video> extends Widget<T> {
  createNode() {
    return new Gtk.Video({}) as T
  }
  set(propName: string, newValue: any) {
    super.set(propName, newValue)
    switch (propName) {
      case "autoplay":
        if (this.node.getAutoplay !== newValue) {
          this.node.setAutoplay(newValue)
        }
        break
      case "file":
        if (this.node.getFile !== newValue) {
          this.node.setFile(newValue)
        }
        break
      case "loop":
        if (this.node.getLoop !== newValue) {
          this.node.setLoop(newValue)
        }
        break
      case "mediaStream":
        if (this.node.getMediaStream !== newValue) {
          this.node.setMediaStream(newValue)
        }
        break
      case "accessibleRole":
        if (this.node.getAccessibleRole !== newValue) {
          this.node.accessibleRole = newValue
        }
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
