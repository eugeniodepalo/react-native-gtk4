import { Gtk } from "./index.js"
import Widget from "./widget"

export default class Container {
  application: Gtk.Application
  children: Widget[] = []

  constructor(application: Gtk.Application) {
    this.application = application
  }

  appendChild(child: Widget<any>) {
    this.children.push(child)
    this.afterInsert(child)
  }

  removeChild(child: Widget<any>) {
    const index = this.children.indexOf(child)

    if (index !== -1) {
      this.children.splice(index, 1)
    }

    if (child.node instanceof Gtk.Window) {
      child.node.destroy()
    }

    if (child.node instanceof Gtk.Widget) {
      child.node.unparent()
    }
  }

  insertBefore(child: Widget<any>, beforeChild: Widget<any>) {
    const index = this.children.indexOf(beforeChild)

    if (index !== -1) {
      this.children.splice(index, 0, child)
    }

    this.afterInsert(child)
  }

  private afterInsert(child: Widget) {
    if (child.node instanceof Gtk.ApplicationWindow) {
      child.node.setApplication(this.application)
    }

    if (child.node instanceof Gtk.Window) {
      child.node.show()
    }
  }
}
