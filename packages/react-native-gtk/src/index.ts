import gi from "node-gtk"
import Reconciler from "./reconciler"

export interface Container {
  app: any
  loop: any
}

export const GLib = gi.require("GLib", "2.0")
export const Gtk = gi.require("Gtk", "4.0")

Gtk.init()
gi.startLoop()

let currentTag = 0

export default function render(element: React.ReactNode, app: any) {
  const loop = GLib.MainLoop.new(null, false)
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

export * from "./widgets"
