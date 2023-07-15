import React from "react"
import render, { ApplicationProvider, Gio, Gtk } from "react-native-gtk4"
import App from "./components/App.js"

const app = new Gtk.Application(
  "com.example.flatpak",
  Gio.ApplicationFlags.DEFAULT_FLAGS
)

render(
  <ApplicationProvider value={app}>
    <App />
  </ApplicationProvider>,
  app
)
