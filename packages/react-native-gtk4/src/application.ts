import gi from "@/generated/girs/node-gtk.js"
import Gtk from "@/generated/girs/node-gtk-4.0.js"
import GLib from "@/generated/girs/node-glib-2.0.js"
import { ApplicationContext } from "./components/ApplicationProvider.js"
import ApplicationWindow from "./generated/widgets/ApplicationWindow.js"
import Node from "./node.js"

export const MAX_TIMEOUT = 2147483647

export default class Application extends Node<Gtk.Application> {
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

  appendChild(child: Node) {
    super.appendChild(child)
    this.afterInsert(child)
  }

  insertBefore(child: Node, beforeChild: Node) {
    super.insertBefore(child, beforeChild)
    this.afterInsert(child)
  }

  private afterInsert(child: Node) {
    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.node)
    }
  }
}
