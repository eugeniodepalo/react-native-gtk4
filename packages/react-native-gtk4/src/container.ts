import { GLib, Gtk } from "./index.js"
import Widget from "./widget.js"
import Reconciler from "./reconciler.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"

export default class Container {
  application: Gtk.Application
  children: Widget[] = []
  private static currentTag = 0
  private instance: ReturnType<typeof Reconciler.createContainer>
  private loop: GLib.MainLoop

  constructor(application: Gtk.Application) {
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
      child.node.present()
    }
  }
}
