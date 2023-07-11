import { Container, Gtk } from "../../index.js"
import Window from "./Window.js"

export default class ApplicationWindow<
  T extends Gtk.ApplicationWindow,
> extends Window<T> {
  createNode(container: Container, props: Record<string, any>) {
    return new Gtk.ApplicationWindow({
      application: container.app,
    }) as T
  }
  set(propName: string, newValue: any, oldValue: any) {
    super.set(propName, newValue, oldValue)
    switch (propName) {
      case "showMenubar":
        this.node.setShowMenubar(newValue)
        break
    }
  }
  commitMount() {
    super.commitMount()
    this.node.present()
    this.node.on("close-request", () => {
      if (this.container.app.getWindows().length === 1) {
        this.container.app.quit()
        this.container.loop.quit()
        return false
      }
      return true
    })
  }
}
