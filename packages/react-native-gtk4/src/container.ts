import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import { Reconciler } from "./reconciler.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"
import AbstractWidget from "./abstract/widget.js"
import { ApplicationWindow } from "./generated/widgets.js"
import AbstractContainer from "./abstract/container.js"

export const MAX_TIMEOUT = 2147483647

export default class Container extends AbstractContainer {
  private loop: GLib.MainLoop
  private timeout?: NodeJS.Timeout

  constructor(application: Gtk.Application, reconciler?: Reconciler) {
    const context = {
      quit: () => {
        this.context.application.quit()
        this.loop.quit()
        clearTimeout(this.timeout)
        return false
      },
      application,
    }

    super(context, reconciler)

    this.loop = GLib.MainLoop.new(null, false)
  }

  render(element: React.ReactNode) {
    this.context.application.on("activate", () => {
      this.update(withApplicationContext(element, this.context))

      const loop = () => {
        this.timeout = setTimeout(loop, MAX_TIMEOUT)
      }

      loop()
      gi.startLoop()
      this.loop.run()
    })

    this.context.application.run([])
  }

  appendChild(child: AbstractWidget) {
    super.appendChild(child)
    this.afterInsert(child)
  }

  insertBefore(child: AbstractWidget, beforeChild: AbstractWidget) {
    super.insertBefore(child, beforeChild)
    this.afterInsert(child)
  }

  private afterInsert(child: AbstractWidget) {
    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.context.application)
    }
  }
}
