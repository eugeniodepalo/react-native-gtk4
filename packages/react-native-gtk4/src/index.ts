import Gtk from "@girs/node-gtk-4.0"
import { createContainer, destroyContainer } from "./container.js"
import { createReconciler } from "./reconciler.js"
import "./generated/jsx.js"
import "./overrides.js"

export { default as Gtk } from "@girs/node-gtk-4.0"
export { default as Gdk } from "@girs/node-gdk-4.0"
export { default as Gio } from "@girs/node-gio-2.0"
export { default as GLib } from "@girs/node-glib-2.0"
export { default as GObject } from "@girs/node-gobject-2.0"
export { default as Pango } from "@girs/node-pango-1.0"
export { createContainer, destroyContainer, createReconciler }
export * from "./generated/intrinsics.js"
export * from "./hooks.js"
export * from "./portal.js"

export {
  AboutDialog,
  ActionBar,
  ApplicationWindow,
  Calendar,
  CenterBox,
  CheckButton,
  ColorDialogButton,
  ColumnView,
  DropDown,
  EmojiChooser,
  Expander,
  FontDialogButton,
  Frame,
  Grid,
  HeaderBar,
  LevelBar,
  ListModelProvider,
  ListProvider,
  ListView,
  MenuButton,
  Notebook,
  Overlay,
  PageSetupUnixDialog,
  Paned,
  Popover,
  PopoverMenu,
  PopoverMenuBar,
  PrintUnixDialog,
  Scale,
  Stack,
  TreeProvider,
} from "./components.js"

export default function render(
  element: React.ReactNode,
  application: Gtk.Application
) {
  createContainer(application).render(element)
}
