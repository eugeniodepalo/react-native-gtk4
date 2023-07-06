import { Container, Gtk } from ".."
import Widget from "../widget"

export default class MediaControls extends Widget {
  createNode(container: Container) {
    return new Gtk.MediaControls()
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
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
