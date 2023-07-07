import "./jsx.js"
import gi from "@girs/node-gtk"
import { Gtk } from "@girs/node-gtk-4.0"
import { GLib } from "@girs/node-glib-2.0"
import { Gio } from "@girs/node-gio-2.0"
import Reconciler from "./reconciler.js"
export * from "./elements.js"
export * from "./components.js"
export { Gtk, Gio, GLib }
import "./overrides.js"

export interface Container {
  app: Gtk.Application
  loop: GLib.MainLoop
}

Gtk.init()
gi.startLoop()

let currentTag = 0

export default function render(element: React.ReactNode, app: Gtk.Application) {
  const loop = new GLib.MainLoop(null, false)
  const rootContainer: Container = { app, loop }

  app.on("activate", () => {
    const container = Reconciler.createContainer(
      rootContainer,
      0,
      null,
      false,
      null,
      (currentTag++).toString(),
      () => {},
      null
    )
    Reconciler.updateContainer(element, container, null, () => {
      GLib.idleAdd(GLib.PRIORITY_DEFAULT, () => {
        loop.run()
        return false
      })
    })
  })

  app.run([])
}
