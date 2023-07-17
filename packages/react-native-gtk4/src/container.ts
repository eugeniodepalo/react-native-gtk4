import { Gtk } from "./index.js"
import Widget from "./widget"
import { Window, ApplicationWindow } from "./generated/widgets.js"

export default class Container {
  application: Gtk.Application
  children: Widget<any>[] = []

  constructor(application: Gtk.Application) {
    this.application = application
  }

  appendChild(child: Widget<any>) {
    this.children.push(child)

    if (child instanceof Window) {
      child.node.show()
    }

    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.application)
    }
  }

  removeChild(child: Widget<any>) {
    const index = this.children.indexOf(child)

    if (index !== -1) {
      this.children.splice(index, 1)
      child.node.destroy()
    }
  }
}
