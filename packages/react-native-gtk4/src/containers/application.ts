import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import {
  ApplicationContext,
  withApplicationContext,
} from "../components/ApplicationProvider.js"
import ApplicationWindow from "../generated/widgets/ApplicationWindow.js"
import Container from "./base.js"
import { Reconciler } from "../reconciler.js"
import AbstractNode from "src/abstract/node.js"

export const MAX_TIMEOUT = 2147483647

export default class ApplicationContainer<
  T extends Gtk.Application = Gtk.Application,
> extends Container<T, Gtk.Widget> {
  private context: ApplicationContext
  private loop: GLib.MainLoop
  private timeout?: NodeJS.Timeout

  constructor(node: T, reconciler?: Reconciler) {
    super(node, reconciler)

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

  render(element: React.ReactNode) {
    this.node.on("activate", () => {
      super.render(withApplicationContext(element, this.context))

      const loop = () => {
        this.timeout = setTimeout(loop, MAX_TIMEOUT)
      }

      loop()
      gi.startLoop()
      this.loop.run()
    })

    this.node.run([])
  }

  appendChild(child: AbstractNode<Gtk.Widget>) {
    super.appendChild(child)
    this.afterInsert(child)
  }

  insertBefore(
    child: AbstractNode<Gtk.Widget>,
    beforeChild: AbstractNode<Gtk.Widget>
  ) {
    super.insertBefore(child, beforeChild)
    this.afterInsert(child)
  }

  private afterInsert(child: AbstractNode<Gtk.Widget>) {
    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.node)
    }
  }
}
