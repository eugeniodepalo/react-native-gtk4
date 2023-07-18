import gi from "@girs/node-gtk"
import { GLib, Gtk } from "./index.js"
import Reconciler from "./reconciler.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"
import Widget from "./widget.js"
import { ApplicationWindow } from "./generated/widgets.js"

export default class Container {
  children: ApplicationWindow[] = []

  private application: Gtk.Application
  private static currentTag = 0
  private static initialized = false
  private instance: ReturnType<typeof Reconciler.createContainer>
  private loop: GLib.MainLoop

  constructor(application: Gtk.Application) {
    if (!Container.initialized) {
      gi.startLoop()
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
    this.application.on("window-removed", (window) => {
      const child = this.children.find((c) => c.node === window)

      if (child) {
        this.removeChild(child)
      }

      if (this.children.length === 0) {
        this.loop.quit()
      }
    })

    this.application.on("activate", () => {
      Reconciler.updateContainer(
        withApplicationContext(element, this.application),
        this.instance,
        null,
        () => {}
      )

      this.loop.run()
    })

    this.application.run([])
  }

  appendChild(child: Widget) {
    if (!this.isApplicationWindow(child)) {
      return
    }

    this.children.push(child)
    child.node.setApplication(this.application)
  }

  removeChild(child: Widget) {
    if (!this.isApplicationWindow(child)) {
      return
    }

    const index = this.children.indexOf(child)

    if (index !== -1) {
      this.children.splice(index, 1)
    }

    child.node.destroy()
  }

  insertBefore(child: Widget, beforeChild: Widget) {
    if (!this.isApplicationWindow(child)) {
      return
    }

    const index = this.children.indexOf(
      beforeChild as Widget<Gtk.ApplicationWindow>
    )

    if (index !== -1) {
      this.children.splice(index, 0, child)
    }

    child.node.setApplication(this.application)
  }

  private isApplicationWindow(
    widget: Widget
  ): widget is Widget<Gtk.ApplicationWindow> {
    return widget.node instanceof Gtk.ApplicationWindow
  }
}
