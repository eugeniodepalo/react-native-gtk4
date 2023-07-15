import React from "react"
import render, { Gio, Gtk } from "react-native-gtk4"
import App from "./components/App.js"

render(
  <App />,
  new Gtk.Application(
    "com.example.multiple-windows",
    Gio.ApplicationFlags.DEFAULT_FLAGS
  )
)
