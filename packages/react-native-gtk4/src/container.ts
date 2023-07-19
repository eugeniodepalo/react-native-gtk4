import gi from "@girs/node-gtk"
import { GLib, Gtk } from "./index.js"
import Reconciler from "./reconciler.js"
import {
  Application,
  withApplicationContext,
} from "./components/ApplicationProvider.js"
import Widget from "./widget.js"

export default class Container {
  children: Widget[] = []

  private application: Gtk.Application
  private static currentTag = 0
  private static initialized = false
  private instance: ReturnType<typeof Reconciler.createContainer>
  private loop: GLib.MainLoop

  constructor(application: Gtk.Application) {
    if (!Container.initialized) {
      Gtk.init()
      Container.initialized = true
    }

    this.application = application
    this.loop = GLib.MainLoop.new(null, false)

    this.instance = Reconciler.createContainer(
      this,
      0,
      null,
      false,
      null,
      (Container.currentTag++).toString(),
      () => {},
      null
    )
  }

  render(element: React.ReactNode) {
    this.application.on("activate", () => {
      const application: Application = {
        quit: () => {
          this.application.quit()
          this.loop.quit()
          return false
        },
        application: this.application,
      }

      Reconciler.updateContainer(
        withApplicationContext(element, application),
        this.instance,
        null,
        () => {}
      )

      gi.startLoop()
      this.loop.run()
    })

    this.application.run([])
  }

  appendChild(child: Widget) {
    if (this.isApplicationWindow(child)) {
      child.node.setApplication(this.application)
    }

    this.children.push(child)
  }

  removeChild(child: Widget) {
    const index = this.children.indexOf(child)

    if (index < 0) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)

    if (this.isApplicationWindow(child)) {
      child.node.destroy()
    }
  }

  insertBefore(child: Widget, beforeChild: Widget) {
    const index = this.children.indexOf(beforeChild) - 1

    if (index < 0) {
      this.children.unshift(child)
    } else {
      this.children.splice(index, 0, child)
    }

    if (this.isApplicationWindow(child)) {
      child.node.setApplication(this.application)
    }
  }

  private isApplicationWindow(
    widget: Widget
  ): widget is Widget<Gtk.ApplicationWindow> {
    return widget.node instanceof Gtk.ApplicationWindow
  }
}
