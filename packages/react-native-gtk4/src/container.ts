import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import GLib from "@girs/node-glib-2.0"
import { Reconciler, createReconciler } from "./reconciler.js"
import {
  Application,
  withApplicationContext,
} from "./components/ApplicationProvider.js"
import AnyWidget from "./widget.js"
import { ApplicationWindow, Window } from "./generated/widgets.js"

export const MAX_TIMEOUT = 2147483647

export default class Container {
  children: AnyWidget[] = []

  private root: Application
  private static currentTag = 0
  private container: any
  private reconciler: Reconciler
  private loop: GLib.MainLoop
  private timeout?: NodeJS.Timeout

  constructor(
    application: Gtk.Application,
    reconciler: Reconciler = createReconciler()
  ) {
    this.root = {
      quit: () => {
        this.root.application.quit()
        this.loop.quit()
        clearTimeout(this.timeout)
        return false
      },
      application,
    }

    this.loop = GLib.MainLoop.new(null, false)
    this.reconciler = reconciler

    this.container = this.reconciler.createContainer(
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
    this.root.application.on("activate", () => {
      this.reconciler.updateContainer(
        withApplicationContext(element, this.root),
        this.container,
        null,
        () => {}
      )

      const loop = () => {
        this.timeout = setTimeout(loop, MAX_TIMEOUT)
      }

      loop()
      gi.startLoop()
      this.loop.run()
    })

    this.root.application.run([])
  }

  appendChild(child: AnyWidget) {
    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.root.application)
    }

    this.children.push(child)
  }

  removeChild(child: AnyWidget) {
    const index = this.children.indexOf(child)

    if (index === -1) {
      throw new Error("Removed child not found")
    }

    this.children.splice(index, 1)

    if (child instanceof Window) {
      child.node.destroy()
    } else {
      child.node.unparent()
    }
  }

  insertBefore(child: AnyWidget, beforeChild: AnyWidget) {
    const beforeIndex = this.children.indexOf(beforeChild)
    const index = beforeIndex - 1

    if (beforeIndex === -1) {
      throw new Error("Before child not found")
    }

    if (index < 0) {
      this.children.unshift(child)
    } else {
      this.children.splice(index, 0, child)
    }

    if (child instanceof ApplicationWindow) {
      child.node.setApplication(this.root.application)
    }
  }
}
