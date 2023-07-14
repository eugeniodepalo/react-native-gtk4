import { Gtk, Gio } from "react-native-gtk4"

export const application = new Gtk.Application(
  "com.example.simple",
  Gio.ApplicationFlags.DEFAULT_FLAGS
)
