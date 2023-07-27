import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import {
  ApplicationContext,
  PRIVATE_CONTAINER_KEY,
  withApplicationContext,
} from "./components/ApplicationProvider.js"
import AbstractWidget from "./abstract/widget.js"
import AbstractNode from "./abstract/node.js"
import { Reconciler } from "./reconciler.js"
import ApplicationWindow from "./generated/widgets/ApplicationWindow.js"
import Window from "./generated/widgets/Window.js"

export const MAX_TIMEOUT = 2147483647

let currentTag = 0

export class Container extends AbstractNode<AbstractWidget> {
  context: ApplicationContext

  private loop: GLib.MainLoop
  private timeout?: NodeJS.Timeout
  private container: any

  constructor(application: Gtk.Application) {
    super()

    this.context = {
      quit: () => {
        this.context.application.quit()
        this.loop.quit()
        clearTimeout(this.timeout)
        return false
      },
      application,
      [PRIVATE_CONTAINER_KEY]: this,
    }

    this.container = Reconciler.createContainer(
      this,
      0,
      null,
      false,
      null,
      (currentTag++).toString(),
      /* istanbul ignore next */ () => {},
      null
    )

    this.loop = GLib.MainLoop.new(null, false)
  }

  render(element: React.ReactNode) {
    this.context.application.on("activate", () => {
      Reconciler.updateContainer(
        withApplicationContext(element, this.context),
        this.container,
        null,
        /* istanbul ignore next */ () => {}
      )

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

  removeChild(child: AbstractWidget): void {
    super.removeChild(child)

    if (child instanceof Window) {
      child.node.destroy()
    } else {
      child.node.unparent()
    }
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
