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
import Container from "./container.js"

gi.startLoop()
Gtk.init()

let currentTag = 0

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  const loop = GLib.MainLoop.new(null, false)

  application.on("activate", () => {
    const container = Reconciler.createContainer(
      new Container(application),
      0,
      null,
      false,
      null,
      (currentTag++).toString(),
      () => {},
      null
    )

    Reconciler.updateContainer(
      withApplicationContext(element, application),
      container,
      null,
      () => {}
    )

    loop.run()
  })

  application.run([])
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
