import { Container, Gtk } from ".."
import ApplicationWindow from "../widgets/ApplicationWindow"

const commitMount = ApplicationWindow.prototype.commitMount

ApplicationWindow.prototype.createNode = function (container: Container) {
  return new Gtk.ApplicationWindow(container.app)
}

ApplicationWindow.prototype.commitMount = function (...args) {
  commitMount.apply(this, args)

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
