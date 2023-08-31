import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import { ApplicationContext } from "./components/ApplicationProvider.js"
import ApplicationWindow from "./generated/widgets/ApplicationWindow.js"
import AbstractNode from "./node.js"

export const MAX_TIMEOUT = 2147483647

export default class Application extends AbstractNode<Gtk.Application> {
  context: ApplicationContext

  private loop: GLib.MainLoop
  private timeout?: NodeJS.Timeout

  constructor(node: Gtk.Application) {
    super(node)

    this.loop = GLib.MainLoop.new(null, false)

    this.context = {
      quit: () => {
        this.node.quit()
        this.loop.quit()
        clearTimeout(this.timeout)
        return false
      },
      application: node,
    }
  }

  run(callback: () => void) {
    this.node.on("activate", () => {
      callback()

      const loop = () => {
        this.timeout = setTimeout(loop, MAX_TIMEOUT)
      }

      loop()
      gi.startLoop()
      this.loop.run()
    })

    this.node.run([])
  }

  appendChild(child: AbstractNode) {
    super.appendChild(child)
    this.afterInsert(child)
  }

  insertBefore(child: AbstractNode, beforeChild: AbstractNode) {
    super.insertBefore(child, beforeChild)
    this.afterInsert(child)
  }

  private afterInsert(child: AbstractNode) {
    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.node)
    }
  }
}
