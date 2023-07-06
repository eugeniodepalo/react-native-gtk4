import { Container, Gtk } from ".."
import Widget from "../widget"

export default class Video extends Widget {
  createNode(container: Container) {
    return new Gtk.Video()
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
        this.node.setAccessibleRole(newValue)
        break
      default:
        break
    }
  }
}
