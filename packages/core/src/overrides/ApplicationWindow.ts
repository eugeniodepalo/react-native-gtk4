import { Container, Gtk } from ".."
import GeneratedApplicationWindow from "../widgets/ApplicationWindow"

export default class ApplicationWindow extends GeneratedApplicationWindow {
  createNode(container: Container) {
    return new Gtk.ApplicationWindow(container.app)
  }
  commitMount() {
    super.commitMount()
    this.node.present()
    this.node.on("close-request", () => {
      if (this.container.app.getWindows().length === 0) {
        this.container.app.quit()
        this.container.loop.quit()
        return false
      }
      return true
    })
  }
}
