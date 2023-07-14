import { Gtk, Gio } from "react-native-gtk4"

export const application = new Gtk.Application(
  "com.example.kitchen-sink",
  Gio.ApplicationFlags.DEFAULT_FLAGS
)
