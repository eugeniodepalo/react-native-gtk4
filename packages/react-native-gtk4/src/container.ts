import gi from "@girs/node-gtk"
import { GLib, Gtk } from "./index.js"
import Reconciler from "./reconciler.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"
import Widget from "./widget.js"
import { ApplicationWindow } from "./generated/widgets.js"

export default class Container {
  children: ApplicationWindow<Gtk.ApplicationWindow>[] = []

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

  appendChild(child: Widget<any>) {
    if (!this.isApplicationWindow(child)) {
      return
    }

    this.children.push(child)
    this.afterInsert(child)
  }

  removeChild(child: Widget<any>) {
    if (!this.isApplicationWindow(child)) {
      return
    }

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
    if (!this.isApplicationWindow(child)) {
      return
    }

    const index = this.children.indexOf(beforeChild)

    if (index !== -1) {
      this.children.splice(index, 0, child)
    }

    this.afterInsert(child)
  }

  private afterInsert(child: Widget) {
    if (!this.isApplicationWindow(child)) {
      return
    }

    child.node.on("close-request", () => {
      this.removeChild(child)

      if (this.children.length === 0) {
        this.loop.quit()
        this.application.quit()
      }

      return false
    })

    child.node.setApplication(this.application)
    child.node.present()
  }

  private isApplicationWindow(
    node: Widget<any>
  ): node is Widget<Gtk.ApplicationWindow> {
    return node.node instanceof Gtk.ApplicationWindow
  }
}
