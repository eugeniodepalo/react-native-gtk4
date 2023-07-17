import gi from "@girs/node-gtk"
import Gtk from "@girs/node-gtk-4.0"
import Gdk from "@girs/node-gdk-4.0"
import Gio from "@girs/node-gio-2.0"
import GLib from "@girs/node-glib-2.0"
import GObject from "@girs/node-gobject-2.0"
import Pango from "@girs/node-pango-1.0"
import "./generated/jsx.js"
import "./overrides.js"
import Container from "./container.js"

gi.startLoop()
Gtk.init()

let currentContainer: Container | null = null

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  currentContainer = new Container(application)
  currentContainer.render(element)
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
