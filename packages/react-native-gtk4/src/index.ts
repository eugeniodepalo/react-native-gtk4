import gi from "@girs/node-gtk"
import { Gtk } from "@girs/node-gtk-4.0"
import { Gdk } from "@girs/node-gdk-4.0"
import { Gio } from "@girs/node-gio-2.0"
import { GLib } from "@girs/node-glib-2.0"
import { GObject } from "@girs/node-gobject-2.0"
import { Pango } from "@girs/node-pango-1.0"
import Reconciler from "./reconciler.js"

import "./generated/jsx.js"

export interface Container {
  app: Gtk.Application
  loop: GLib.MainLoop
}

Gtk.init()

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
    Reconciler.updateContainer(element, container, null, () => {})
    setTimeout(gi.startLoop)
    loop.run()
  })

  app.run([])
}

export * from "./generated/intrinsics.js"
export * from "./generated/components.js"
export { ApplicationWindow } from "./components.js"
export { Gtk, Gio, GLib, GObject, Pango, Gdk }
