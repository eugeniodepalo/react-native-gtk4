import Gtk from "@girs/node-gtk-4.0"
import Container from "./container.js"
import "./generated/jsx.js"
import "./overrides.js"

export { default as Gtk } from "@girs/node-gtk-4.0"
export { default as Gdk } from "@girs/node-gdk-4.0"
export { default as Gio } from "@girs/node-gio-2.0"
export { default as GLib } from "@girs/node-glib-2.0"
export { default as GObject } from "@girs/node-gobject-2.0"
export { default as Pango } from "@girs/node-pango-1.0"
export * from "./generated/intrinsics.js"
export * from "./hooks.js"

export {
  AboutDialog,
  ActionBar,
  ApplicationWindow,
  CenterBox,
  CssProvider,
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

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  new Container(application).render(element)
}
