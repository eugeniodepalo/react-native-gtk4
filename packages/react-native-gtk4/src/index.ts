import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import Gio from "@girs/node-gio-2.0"
import GLib from "@girs/node-glib-2.0"
import GObject from "@girs/node-gobject-2.0"
import Pango from "@girs/node-pango-1.0"

import Reconciler from "./reconciler.js"
import "./generated/jsx.js"
import "./overrides.js"
import { withApplicationContext } from "./components/ApplicationProvider.js"

gi.startLoop()
Gtk.init()

let currentTag = 0

export default function render(element: React.ReactNode, app: Gtk.Application) {
  const loop = GLib.MainLoop.new(null, false)

  app.on("activate", () => {
    const container = Reconciler.createContainer(
      app,
      0,
      null,
      false,
      null,
      (currentTag++).toString(),
      () => {},
      null
    )

    Reconciler.updateContainer(
      withApplicationContext(element, app),
      container,
      null,
      () => {}
    )

    loop.run()
  })

  app.run([])
}

export * from "./generated/intrinsics.js"
export * from "./hooks.js"

export {
  AboutDialog,
  ApplicationWindow,
  CenterBox,
  Expander,
  Frame,
  Grid,
  HeaderBar,
  Notebook,
  Overlay,
  Paned,
  Popover,
  PopoverMenu,
  Stack,
} from "./components.js"

export { Gtk, Gio, GLib, GObject, Pango, Gdk }
